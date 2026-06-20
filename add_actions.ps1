$content = Get-Content -Raw "src\actions\claimActions.ts"
if ($content -notmatch "export async function deleteClaim") {
    $newAction = "

export async function deleteClaim(id: string) {
  const claim = await prisma.claim.findUnique({ where: { id }, include: { deliveryItems: true } });
  if (!claim) return;
  await prisma.$transaction(async (tx) => {
    if (claim.deliveryItems.length > 0) {
      await tx.deliveryItem.deleteMany({ where: { claimId: id } });
    }
    await tx.dealer.update({
      where: { id: claim.dealerId },
      data: { openingPendingBalance: { decrement: 1 } }
    });
    await tx.claim.delete({ where: { id } });
  });
  revalidatePath('/', 'layout');
}
"
    $content += $newAction
    Set-Content -Path "src\actions\claimActions.ts" -Value $content -NoNewline
}

$content = Get-Content -Raw "src\actions\companyActions.ts"
if ($content -notmatch "export async function deleteCompany") {
    $newAction = "

export async function deleteCompany(id: string) {
  try {
    await prisma.company.delete({ where: { id } });
    revalidatePath('/', 'layout');
  } catch (error) {
    return { error: 'Cannot delete company. It may have existing claims or batches.' };
  }
}
"
    $content += $newAction
    Set-Content -Path "src\actions\companyActions.ts" -Value $content -NoNewline
}

$content = Get-Content -Raw "src\actions\dealerActions.ts"
if ($content -notmatch "export async function deleteDealer") {
    $newAction = "

export async function deleteDealer(id: string) {
  try {
    await prisma.dealer.delete({ where: { id } });
    revalidatePath('/', 'layout');
  } catch (error) {
    return { error: 'Cannot delete dealer. They may have existing claims or deliveries.' };
  }
}
"
    $content += $newAction
    Set-Content -Path "src\actions\dealerActions.ts" -Value $content -NoNewline
}

$content = Get-Content -Raw "src\actions\batchActions.ts"
if ($content -notmatch "export async function deleteBatch") {
    $newAction = "

export async function deleteBatch(id: string) {
  await prisma.$transaction(async (tx) => {
    await tx.claim.updateMany({ where: { batchId: id }, data: { batchId: null, status: 'Received from Dealer' } });
    await tx.batch.delete({ where: { id } });
  });
  revalidatePath('/', 'layout');
}
"
    $content += $newAction
    Set-Content -Path "src\actions\batchActions.ts" -Value $content -NoNewline
}

$content = Get-Content -Raw "src\actions\deliveryActions.ts"
if ($content -notmatch "export async function deleteDelivery") {
    $newAction = "

export async function deleteDelivery(id: string) {
  await prisma.$transaction(async (tx) => {
    const items = await tx.deliveryItem.findMany({ where: { deliveryId: id } });
    const claimIds = items.map(i => i.claimId);
    if (claimIds.length > 0) {
      await tx.claim.updateMany({ where: { id: { in: claimIds } }, data: { status: 'Replacement Received from Company' } });
      const delivery = await tx.delivery.findUnique({ where: { id } });
      if (delivery) {
        await tx.dealer.update({
          where: { id: delivery.dealerId },
          data: { openingPendingBalance: { increment: claimIds.length } }
        });
      }
    }
    await tx.deliveryItem.deleteMany({ where: { deliveryId: id } });
    await tx.delivery.delete({ where: { id } });
  });
  revalidatePath('/', 'layout');
}
"
    $content += $newAction
    Set-Content -Path "src\actions\deliveryActions.ts" -Value $content -NoNewline
}
