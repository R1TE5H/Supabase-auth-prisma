import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();

  return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validation Here

  const new_product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  if (!new_product)
    return NextResponse.json(
      { error: "Unable to Create Product" },
      { status: 400 }
    );

  return NextResponse.json(new_product, { status: 201 });
}
