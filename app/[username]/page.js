import React from "react";
import PaymentPage from "@/components/PaymentPage";

const Username = async ({ params }) => {
  params = await params;
  <PaymentPage username={decodeURIComponent(params.username)} />;
};

export default Username;
