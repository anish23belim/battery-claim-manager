const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const claimsWithMobile = await prisma.claim.findMany({
    where: {
      customerMobile: { not: null }
    },
    take: 5,
    select: {
      claimNumber: true,
      customerName: true,
      customerMobile: true,
    }
  });
  console.log("Claims with direct mobile:");
  console.log(claimsWithMobile);

  const claimsWithDealer = await prisma.claim.findMany({
    where: {
      dealerId: { not: null }
    },
    take: 5,
    select: {
      claimNumber: true,
      dealer: { select: { name: true, mobile: true, whatsapp: true } }
    }
  });
  console.log("Claims with dealer mobile:");
  console.log(claimsWithDealer);
}

main().catch(console.error).finally(() => prisma.$disconnect());
