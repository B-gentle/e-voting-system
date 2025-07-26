import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
