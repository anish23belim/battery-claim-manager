const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const claims = await prisma.claim.findMany({
    include: {
      dealer: true,
      company: true,
      batch: true
    }
  });
  
  let bad = 0;
  for (const claim of claims) {
    if (!claim.company) {
      console.log(`Claim ${claim.claimNumber} has NO COMPANY!`);
      bad++;
    }
  }
  console.log(`Checked ${claims.length} claims. Bad claims: ${bad}`);
}
main().finally(() => prisma.$disconnect());
