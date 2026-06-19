"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
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
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
