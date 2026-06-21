import React from "react";
import prisma from "@/lib/prisma";
import DealersClient from "./DealersClient";

export default async function Page() {
  const dealers = await prisma.dealer.findMany({
    orderBy: { name: "asc" }
  });

  return <DealersClient initialData={dealers} />;
}
