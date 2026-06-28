const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Find all claims that are isShopSettled = true
  const settledClaims = await prisma.claim.findMany({
    where: {
      isShopSettled: true,
      dealerId: { not: null }
    }
  });

  console.log(`Found ${settledClaims.length} shop settled claims.`);

  // Count how many per dealer
  const dealerCounts = {};
  for (const claim of settledClaims) {
    if (!dealerCounts[claim.dealerId]) {
      dealerCounts[claim.dealerId] = 0;
    }
    dealerCounts[claim.dealerId]++;
  }

  // Restore the balances
  for (const [dealerId, count] of Object.entries(dealerCounts)) {
    const dealer = await prisma.dealer.findUnique({ where: { id: dealerId } });
    if (dealer) {
      console.log(`Dealer ${dealer.name}: incrementing openingPendingBalance by ${count}`);
      await prisma.dealer.update({
        where: { id: dealerId },
        data: { openingPendingBalance: { increment: count } }
      });
    }
  }

  console.log('Done restoring balances.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
