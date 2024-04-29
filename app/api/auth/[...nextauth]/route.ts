import NextAuth, { NextAuthOptions } from "next-auth"
import { authSession } from "../authOptions";



const handler = NextAuth(authSession);

export {handler as GET , handler as POST}