"use client";
import React, { useActionState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signUpAction } from "@/lib/actions/user";
import { useSearchParams } from "next/navigation";
import {signIn} from "next-auth/react"

const SignUpForm = () => {
  const [data, action, isPending] = useActionState(signUpAction, {
    success: false,
    message: "",
  });

  const socialLogin = (provider: "google") => {
    signIn(provider, {
      callbackUrl
    });
  }

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <div className="flex flex-1 flex-col justify-center items-center md:px-4 md:py-8">
      <div className="w-full max-w-md p-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 text-center">
          Welcome to Vobe
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          Organize and manage elections online safely, efficiently, and from
          anywhere.
        </p>
        <form className="flex flex-col gap-4" action={action}>
          <input type="hidden" name="callbackUrl" value={callbackUrl} />
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Fullname"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary transition"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary transition"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary transition"
              required
            />
            <div className="flex mt-1">
              <span className="text-xs text-gray-400">
                Use 8 or more characters with a mix of letters, numbers and symbols
              </span>
            </div>
          </div>
           <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary transition"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary text-white font-semibold py-2 rounded mt-2 hover:bg-[#985FF5] transition"
          >
            {isPending ? "Signing Up..." : "Sign up"}
          </button>
        </form>
        {data && !data.success && (
          <div className="text-center text-red-500 mt-2">{data.message}</div>
        )}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-2 text-gray-400 text-xs">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 w-full bg-primary-light text-gray-700 font-semibold py-2 rounded hover:bg-[#e0d7fa] transition"
          onClick={() => socialLogin("google")}
        >
          <FcGoogle className="text-lg" />
          Sign up with google
        </button>
        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="text-primary font-semibold hover:underline"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
