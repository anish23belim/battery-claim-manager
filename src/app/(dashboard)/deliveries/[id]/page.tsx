import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import PrintButton from "@/components/common/PrintButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";



export default async function DeliveryDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const delivery = await prisma.delivery.findUnique({
    where: { id },
    include: {
      dealer: true,
      items: {
        include: {
          claim: {
            include: { company: true }
          }
        }
      }
    }
  });

  if (!delivery) return <div>Delivery not found</div>;

  return (
    <div>
      <div className="no-print claim-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/deliveries" className="btn btn-outline" style={{ padding: "0.5rem" }}>
            <ArrowLeft size={18} />
          </Link>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Delivery Details</h1>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <WhatsAppButton 
            mobile={delivery.dealer.mobile} 
            message={
`*Battery Replacement Delivery*
Delivery No: ${delivery.deliveryNumber}
Date: ${format(new Date(delivery.date), 'dd MMM yyyy')}
Dear ${delivery.dealer.name},

Your replacement batteries have been delivered:
${delivery.items.map((item, index) => 
  `${index + 1}. *${item.claim.company.name} ${item.claim.company.brandName ? `(${item.claim.company.brandName})` : ""} - ${item.claim.batteryModel}*\n   (Old SN: ${item.claim.oldSerialNumber || "N/A"}${item.newSerialNumber ? `, New SN: ${item.newSerialNumber}` : ''})`
).join('\n')}

${delivery.remarks ? `Remarks: ${delivery.remarks}\n` : ''}
Regards,
Bharat Auto Agency Tinwari`
            } 
          />
          <PrintButton />
        </div>
      </div>

      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Printable Slip Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem", borderBottom: "2px solid var(--card-border)", paddingBottom: "1rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Battery Replacement Delivery Slip</h2>
          <p style={{ margin: "0.5rem 0 0 0", color: "var(--secondary-foreground)" }}>
            Delivery No: <strong style={{ color: "var(--foreground)" }}>{delivery.deliveryNumber}</strong> | 
            Date: <strong>{format(new Date(delivery.date), 'dd MMM yyyy')}</strong>
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "var(--secondary-foreground)" }}>Dealer Info</h3>
          <p style={{ margin: "0 0 0.25rem 0", fontWeight: 500 }}>{delivery.dealer.name} ({delivery.dealer.shopName})</p>
          <p style={{ margin: "0 0 0.25rem 0" }}>{delivery.dealer.mobile}</p>
          <p style={{ margin: "0" }}>{delivery.dealer.address}, {delivery.dealer.city}</p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem", color: "var(--secondary-foreground)" }}>Delivered Items ({delivery.quantity} Batteries)</h3>
          <div style={{ overflowX: "auto", width: "100%" }}>
            <table className="table" style={{ width: "100%", fontSize: "0.875rem", minWidth: "600px" }}>
            <thead>
              <tr>
                <th style={{ background: "transparent", padding: "0.5rem 0", borderBottom: "2px solid var(--foreground)" }}>Claim No</th>
                <th style={{ background: "transparent", padding: "0.5rem 0", borderBottom: "2px solid var(--foreground)" }}>Brand & Model</th>
                <th style={{ background: "transparent", padding: "0.5rem 0", borderBottom: "2px solid var(--foreground)" }}>Old Serial</th>
                <th style={{ background: "transparent", padding: "0.5rem 0", borderBottom: "2px solid var(--foreground)" }}>New Serial</th>
              </tr>
            </thead>
            <tbody>
              {delivery.items.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "0.5rem 0" }}>
                    <div style={{ fontWeight: 500 }}>{item.claim.claimNumber}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--secondary-foreground)" }}>SN: {item.claim.oldSerialNumber || "N/A"}</div>
                  </td>
                  <td style={{ padding: "0.5rem 0" }}>{item.claim.company.name} - {item.claim.batteryModel}</td>
                  <td style={{ padding: "0.5rem 0" }}>{item.claim.oldSerialNumber}</td>
                  <td style={{ padding: "0.5rem 0" }}>{item.newSerialNumber || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {delivery.remarks && (
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ margin: "0" }}><strong>Remarks:</strong> {delivery.remarks}</p>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4rem" }}>
          <div style={{ textAlign: "center", width: "200px" }}>
            <div style={{ borderBottom: "1px solid var(--foreground)", marginBottom: "0.5rem" }}></div>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--secondary-foreground)" }}>Receiver Signature</p>
          </div>
          <div style={{ textAlign: "center", width: "200px" }}>
            <div style={{ borderBottom: "1px solid var(--foreground)", marginBottom: "0.5rem" }}></div>
            <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--secondary-foreground)" }}>Authorized Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
}
