import { PrismaClient } from "@/lib/generated/prisma";
import { users } from "./sample-data";

async function main() {
    const prisma = new PrismaClient();

    await prisma.user.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.verificationToken.deleteMany({});

    
    await prisma.user.createMany({ data: users });
    console.log("Database seeded with sample data.");
}

main()