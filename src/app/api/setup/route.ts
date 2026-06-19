import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    
    // Check if admin already exists
    const existing = await prisma.user.findUnique({
      where: { username: "admin" }
    });

    if (existing) {
      return NextResponse.json({ message: "Admin user already exists." });
    }

    const user = await prisma.user.create({
      data: {
        username: "admin",
        password: hashedPassword,
        role: "Admin"
      }
    });

    return NextResponse.json({ message: "Admin user created successfully", user: { username: user.username } });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
