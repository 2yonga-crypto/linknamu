export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

type LinkCardProps = LinkItem & {
  count: number;
  onClickLink?: (id: string) => void;
};

export default function LinkCard({ id, title, url, count, onClickLink }: LinkCardProps) {
  // mailto:(또는 tel:) 링크는 새 탭에서 열 대상 페이지가 없어서
  // target="_blank"를 쓰면 빈 탭만 뜨고 메일 앱이 안 열리는 경우가 있다.
  const isExternalPage = url.startsWith("http://") || url.startsWith("https://");

  return (
    <a
      href={url}
      target={isExternalPage ? "_blank" : undefined}
      rel={isExternalPage ? "noopener noreferrer" : undefined}
      onClick={() => onClickLink?.(id)}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--card-bg)] px-5 py-4 text-foreground shadow-[0_4px_16px_-4px_rgba(154,90,42,0.15)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--card-bg-hover)] hover:shadow-[0_8px_20px_-6px_rgba(154,90,42,0.22)] active:translate-y-0 active:scale-[0.99]"
    >
      <span aria-hidden className="w-10 shrink-0" />
      <span className="flex-1 text-center font-medium">{title}</span>
      <span className="w-10 shrink-0 text-right text-xs text-[color:var(--muted)]">
        {count}회
      </span>
    </a>
  );
}
