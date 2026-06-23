const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.dealer.updateMany({
    data: { openingPendingBalance: 0 }
  });
  console.log("Reset all openingPendingBalances to 0");
}

main().catch(console.error).finally(() => prisma.$disconnect());
