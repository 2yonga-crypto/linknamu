import Profile from "@/components/Profile";
import LinkCardList from "@/components/LinkCardList";
import type { LinkItem } from "@/components/LinkCard";

// TODO: MongoDB Atlas 연동 후 프로필/링크 데이터를 DB에서 가져오도록 교체
const profile = {
  name: "이용아",
  bio: "세계 최강 골퍼",
};

const links: LinkItem[] = [
  { id: "1", title: "GitHub", url: "https://github.com" },
  { id: "2", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "3", title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <Profile name={profile.name} bio={profile.bio} />
        <LinkCardList links={links} />
      </main>
    </div>
  );
}
