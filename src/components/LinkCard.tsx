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
      className="flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-4 text-center font-medium text-foreground shadow-sm transition-colors hover:bg-zinc-50 active:scale-[0.98] dark:border-white/10 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      {title}
    </a>
  );
}
