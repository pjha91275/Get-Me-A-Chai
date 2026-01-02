import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

const Username = async ({ params }) => {
  params = await params;
  const checkUser = async () => {
    await connectDb();
    let user = await User.findOne({
      username: params.username
    });
    if (!user) {
      return notFound();
    }
  }
  await checkUser();

  console.log(params.username);

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  params = await params;
  console.log(params.username)
  return {
    title: `Support ${params.username} - Get Me A Chai`
  }
}
