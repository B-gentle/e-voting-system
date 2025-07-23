import NEXTAUTH from "next-auth";

export const config = {};

export const { handlers, auth, signIn, signOut } = NEXTAUTH(config);
