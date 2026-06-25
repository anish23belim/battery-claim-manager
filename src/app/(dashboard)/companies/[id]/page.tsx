import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { editCompany } from "@/actions/companyActions";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditCompanyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const company = await prisma.company.findUnique({
    where: { id }
  });

  if (!company) {
    notFound();
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Link href="/companies" className="btn btn-outline" style={{ padding: "0.5rem" }}>
          <ArrowLeft size={18} />
        </Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>Edit Company / Brand</h1>
      </div>

      <div className="card" style={{ maxWidth: "800px" }}>
        <form action={editCompany} className="form-grid">
          
          <input type="hidden" name="id" value={company.id} />

          <div className="form-group col-span-2">
            <label htmlFor="name">Company Name *</label>
            <input type="text" id="name" name="name" defaultValue={company.name} className="form-control" required />
          </div>

          <div className="form-group col-span-2">
            <label htmlFor="brandName">Brand Name *</label>
            <input type="text" id="brandName" name="brandName" defaultValue={company.brandName} className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="contactPerson">Contact Person</label>
            <input type="text" id="contactPerson" name="contactPerson" defaultValue={company.contactPerson || ""} className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" defaultValue={company.mobile || ""} className="form-control" />
          </div>

          <div className="form-group col-span-2">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" defaultValue={company.address || ""} className="form-control" />
          </div>

          <div className="col-span-2" style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/companies" className="btn btn-outline">Cancel</Link>
            <button type="submit" className="btn btn-primary">Update Company</button>
          </div>

        </form>
      </div>
    </div>
  );
}
