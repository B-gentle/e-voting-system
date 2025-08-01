export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

import { Metadata } from "next";
import React from "react";

import AuthCover from "@/components/AuthCover";
import Form from "./Form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {

  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <AuthCover>
      <Form />
    </AuthCover>
  );
};

export default SignInPage;
