import { NextResponse } from "next/server";
import { requireDbUser } from "@/lib/db-user";
import { prisma } from "@/lib/prisma";

const validMethods = ["upi", "card", "cod"];

export async function GET() {
  const user = await requireDbUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const pref = await prisma.paymentPreference.findUnique({
    where: { userId: user.id },
  });
  return NextResponse.json(pref);
}

export async function PUT(request: Request) {
  const user = await requireDbUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { method, upiId } = body;

  if (!validMethods.includes(method)) {
    return NextResponse.json({ error: "Invalid method" }, { status: 400 });
  }

  const pref = await prisma.paymentPreference.upsert({
    where: { userId: user.id },
    update: { method, upiId: upiId ?? null },
    create: { userId: user.id, method, upiId: upiId ?? null },
  });
  return NextResponse.json(pref);
}
