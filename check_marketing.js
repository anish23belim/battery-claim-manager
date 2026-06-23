const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const claims = await prisma.claim.findMany({
    take: 5,
    orderBy: { date: 'asc' },
    select: {
      claimNumber: true,
      date: true,
      customerName: true,
      customerMobile: true,
      dealer: { select: { mobile: true, whatsapp: true } }
    }
  });
  console.log(claims);
}

main().catch(console.error).finally(() => prisma.$disconnect());
