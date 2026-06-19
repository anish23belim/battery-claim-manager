import type { PrismaClient as PrismaClientType } from "@prisma/client";

// Use require to bypass Turbopack's bug with Prisma in Next.js 16
const { PrismaClient } = require("../../node_modules/.prisma/client");

const globalForPrisma = global as unknown as { prisma: PrismaClientType };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
