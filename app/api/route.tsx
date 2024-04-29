
import { NextRequest, NextResponse } from "next/server"
import prisma from '@/prisma/client'


  async function GET(request: NextRequest): Promise<NextResponse> {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}
