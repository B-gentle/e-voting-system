export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to your account",
};

import { Metadata } from "next";
import React from "react";

import AuthCover from "@/components/AuthCover";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUpForm from "./Form";

const SignUpPage = async (props: {
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
      <SignUpForm />
    </AuthCover>
  );
};

export default SignUpPage;
