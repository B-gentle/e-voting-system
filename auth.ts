import NEXTAUTH from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";

export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials == null) return null;

        // validate user
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        //  Check if user exists and if the password matches
        if (user && user.password) {
          const isValidPassword = compareSync(
            credentials.password as string,
            user.password
          );
          if (isValidPassword) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }
        // If no user or password doesn't match, return null
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }) {
      // Set user ID from the token
      session.user.id = token.sub ?? "";

      if (trigger === "update" && user) {
        session.user.name = user.name;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NEXTAUTH(config);
