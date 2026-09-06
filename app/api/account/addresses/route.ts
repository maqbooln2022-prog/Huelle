import { NextResponse } from "next/server";
import { requireDbUser } from "@/lib/db-user";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await requireDbUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const addresses = await prisma.address.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(addresses);
}

export async function POST(request: Request) {
  const user = await requireDbUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { name, line1, city, state, pincode, phone } = body;

  if (!name || !line1 || !city || !pincode) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const address = await prisma.address.create({
    data: { userId: user.id, name, line1, city, state, pincode, phone },
  });
  return NextResponse.json(address, { status: 201 });
}
