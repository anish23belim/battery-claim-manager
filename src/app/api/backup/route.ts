import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import * as xlsx from 'xlsx';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Fetch all data
    const [claims, dealers, companies, deliveries, batches] = await Promise.all([
      prisma.claim.findMany({
        include: { dealer: true, company: true },
        orderBy: { date: 'desc' }
      }),
      prisma.dealer.findMany({
        orderBy: { name: 'asc' }
      }),
      prisma.company.findMany({
        orderBy: { name: 'asc' }
      }),
      prisma.delivery.findMany({
        include: { dealer: true, items: { include: { claim: true } } },
        orderBy: { date: 'desc' }
      }),
      prisma.batch.findMany({
        include: { company: true, claims: true },
        orderBy: { sentDate: 'desc' }
      })
    ]);

    // 2. Format Data for Excel
    const formattedClaims = claims.map(c => ({
      'Claim No': c.claimNumber,
      'Date': c.date.toLocaleDateString(),
      'Dealer': c.dealer ? `${c.dealer.name} (${c.dealer.shopName})` : 'Direct Customer',
      'Customer Name': c.customerName || 'N/A',
      'Customer Mobile': c.customerMobile || 'N/A',
      'Company/Brand': `${c.company.name} - ${c.company.brandName}`,
      'Battery Model': c.batteryModel,
      'Old Serial No': c.oldSerialNumber,
      'Battery Type': c.batteryType,
      'Warranty Card': c.warrantyCard || 'N/A',
      'Sale Date': c.saleDate ? c.saleDate.toLocaleDateString() : 'N/A',
      'Problem': c.problem,
      'Status': c.status,
      'Remarks': c.remarks || ''
    }));

    const formattedDealers = dealers.map(d => ({
      'Name': d.name,
      'Shop Name': d.shopName,
      'Mobile': d.mobile,
      'WhatsApp': d.whatsapp || 'N/A',
      'City': d.city,
      'Address': d.address || 'N/A',
      'Pending Balance': d.openingPendingBalance
    }));

    const formattedCompanies = companies.map(c => ({
      'Company Name': c.name,
      'Brand Name': c.brandName,
      'Contact Person': c.contactPerson || 'N/A',
      'Contact Mobile': c.contactMobile || 'N/A'
    }));

    const formattedDeliveries = deliveries.map(d => ({
      'Delivery No': d.deliveryNumber,
      'Date': d.date.toLocaleDateString(),
      'Dealer': `${d.dealer.name} (${d.dealer.shopName})`,
      'Quantity': d.quantity,
      'Remarks': d.remarks || ''
    }));

    const formattedBatches = batches.map(b => ({
      'Batch No': b.batchNumber,
      'Sent Date': b.sentDate.toLocaleDateString(),
      'Company': b.company.name,
      'Total Claims': b.claims.length,
      'Status': b.status,
      'Courier Info': b.courierInfo || 'N/A',
      'Tracking No': b.trackingNo || 'N/A'
    }));

    // 3. Create Workbook and Sheets
    const wb = xlsx.utils.book_new();

    const wsClaims = xlsx.utils.json_to_sheet(formattedClaims);
    xlsx.utils.book_append_sheet(wb, wsClaims, 'Claims');

    const wsDealers = xlsx.utils.json_to_sheet(formattedDealers);
    xlsx.utils.book_append_sheet(wb, wsDealers, 'Dealers');

    const wsCompanies = xlsx.utils.json_to_sheet(formattedCompanies);
    xlsx.utils.book_append_sheet(wb, wsCompanies, 'Companies');

    const wsDeliveries = xlsx.utils.json_to_sheet(formattedDeliveries);
    xlsx.utils.book_append_sheet(wb, wsDeliveries, 'Deliveries');

    const wsBatches = xlsx.utils.json_to_sheet(formattedBatches);
    xlsx.utils.book_append_sheet(wb, wsBatches, 'Batches');

    // 4. Generate Buffer
    const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });

    // 5. Return Response
    const dateStr = new Date().toISOString().split('T')[0];
    return new NextResponse(buf, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename="Battery_Claim_Backup_${dateStr}.xlsx"`,
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }
    });

  } catch (error) {
    console.error("Backup generation failed:", error);
    return NextResponse.json({ error: "Failed to generate backup" }, { status: 500 });
  }
}
