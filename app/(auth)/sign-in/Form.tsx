"use client";
import React, { useActionState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithCredentialsAction } from "@/lib/actions/user";
import { useSearchParams } from "next/navigation";

const Form = () => {
  const [data, action, isPending] = useActionState(signInWithCredentialsAction, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <div className="flex flex-1 flex-col justify-center items-center md:px-4 md:py-8">
      <div className="w-full max-w-md p-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 text-center">
          Welcome Back
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          Organize and manage elections online safely, efficiently, and from
          anywhere.
        </p>
        <form className="flex flex-col gap-4" action={action}>
          <input type="hidden" name="callbackUrl" value={callbackUrl} />
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
                Must have 8+ characters with mix of letters, numbers and symbols
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="accent-primary" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-xs text-primary font-medium hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary text-white font-semibold py-2 rounded mt-2 hover:bg-[#985FF5] transition"
          >
            {isPending ? "Signing In..." : "Sign in"}
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
        >
          <FcGoogle className="text-lg" />
          Sign in with google
        </button>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/sign-up"
            className="text-primary font-semibold hover:underline"
          >
            Sign UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
