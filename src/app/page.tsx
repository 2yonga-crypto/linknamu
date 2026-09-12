import Profile from "@/components/Profile";
import LinkCardList from "@/components/LinkCardList";
import type { LinkItem } from "@/components/LinkCard";

// TODO: MongoDB Atlas 연동 후 프로필/링크 데이터를 DB에서 가져오도록 교체
const profile = {
  name: "이용아",
  bio: '"초심 개발자" : 요즘에는 AI 개발에 관심이 많아요',
  imageUrl: "http://placehold.co/150x150/orange/white",
};

const links: LinkItem[] = [
  { id: "1", title: "🐙 GitHub", url: "https://github.com/2yonga-crypto" },
  { id: "2", title: "💼 LinkedIn", url: "https://linkedin.com" },
  { id: "3", title: "📧 이메일", url: "mailto:eyonga@naver.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center px-6 py-16 sm:px-8 sm:py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <LinkCardList links={links} />
      </main>
    </div>
  );
}
