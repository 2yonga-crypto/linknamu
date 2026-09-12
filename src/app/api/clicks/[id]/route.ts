import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import type { LinkClickDoc } from "@/lib/mongodb";

// 링크 카드를 클릭할 때마다 해당 링크의 클릭 수를 1 증가시킵니다.
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("linknamu");

    const result = await db
      .collection<LinkClickDoc>("linkClicks")
      .findOneAndUpdate(
        { _id: id },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" },
      );

    const count = result?.count ?? 1;
    return NextResponse.json({ id, count });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 갱신하지 못했습니다." },
      { status: 500 },
    );
  }
}
