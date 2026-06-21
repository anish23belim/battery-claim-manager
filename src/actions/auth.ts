"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { createSession, deleteSession, getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function login(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Username and password are required" };
  }

  // Find user
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    // If no users exist in the database, we can create an initial admin account
    // This is useful for first-time setup
    const userCount = await prisma.user.count();
    if (userCount === 0 && username === "admin") {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          username: "admin",
          password: hashedPassword,
          role: "ADMIN"
        }
      });
      await createSession(newUser.id, newUser.username, newUser.role);
      revalidatePath("/", "layout");
  redirect("/");
    }

    return { error: "Invalid credentials" };
  }

  // Verify password
  const isValid = await bcrypt.compare(password, user.password);
  
  if (!isValid) {
    return { error: "Invalid credentials" };
  }

  await createSession(user.id, user.username, user.role);
  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  await deleteSession();
  revalidatePath("/", "layout");
  redirect("/login");
}

export async function changePassword(prevState: any, formData: FormData) {
  const currentPassword = formData.get("currentPassword") as string;
  const newPassword = formData.get("newPassword") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { error: "All fields are required" };
  }

  if (newPassword !== confirmPassword) {
    return { error: "New passwords do not match" };
  }

  if (newPassword.length < 6) {
    return { error: "New password must be at least 6 characters long" };
  }

  // Get current user session
  const session = await getSession();
  if (!session || !session.userId) {
    return { error: "Not authenticated" };
  }

  const userId = session.userId as string;

  // Find user
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return { error: "User not found" };
  }

  // Verify current password
  const isValid = await bcrypt.compare(currentPassword, user.password);
  if (!isValid) {
    return { error: "Incorrect current password" };
  }

  // Hash new password and save
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword }
  });

  return { success: "Password changed successfully" };
}
