import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import type { LinkClickDoc } from "@/lib/mongodb";

// 모든 링크의 현재 클릭 수를 { [linkId]: count } 형태로 한 번에 반환합니다.
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("linknamu");
    const docs = await db
      .collection<LinkClickDoc>("linkClicks")
      .find({})
      .toArray();

    const counts: Record<string, number> = {};
    for (const doc of docs) {
      counts[doc._id] = doc.count ?? 0;
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 },
    );
  }
}
