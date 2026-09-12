"use client";

import { useEffect, useState } from "react";
import LinkCard, { type LinkItem } from "./LinkCard";

type LinkCardListProps = {
  links: LinkItem[];
};

export default function LinkCardList({ links }: LinkCardListProps) {
  // 데이터를 받기 전에는 0회로 표시하고, 받아오면 실제 값으로 갱신합니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch((error) => {
        console.error("클릭 수를 불러오지 못했습니다:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClickLink = (id: string) => {
    // 클릭 즉시 화면에 반영(낙관적 업데이트)하고, 서버에도 반영을 요청합니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch(`/api/clicks/${id}`, { method: "POST" }).catch((error) => {
      console.error("클릭 수 갱신에 실패했습니다:", error);
    });
  };

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            count={counts[link.id] ?? 0}
            onClickLink={handleClickLink}
          />
        </li>
      ))}
    </ul>
  );
}
