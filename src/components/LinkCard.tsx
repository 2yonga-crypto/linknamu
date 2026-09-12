export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--card-bg)] px-5 py-4 text-center font-medium text-foreground shadow-[0_4px_16px_-4px_rgba(154,90,42,0.15)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--card-bg-hover)] hover:shadow-[0_8px_20px_-6px_rgba(154,90,42,0.22)] active:translate-y-0 active:scale-[0.99]"
    >
      {title}
    </a>
  );
}
