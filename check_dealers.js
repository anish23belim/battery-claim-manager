const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const dealers = await prisma.dealer.findMany({
    select: { id: true, name: true, openingPendingBalance: true }
  });
  console.log(dealers.filter(d => d.openingPendingBalance > 0 || d.openingPendingBalance < 0));
}

main().catch(console.error).finally(() => prisma.$disconnect());
