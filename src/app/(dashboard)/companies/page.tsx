import React from "react";
import prisma from "@/lib/prisma";
import CompaniesClient from "./CompaniesClient";

export default async function Page() {
  const companies = await prisma.company.findMany({
    orderBy: { name: "asc" }
  });

  return <CompaniesClient initialData={companies} />;
}
