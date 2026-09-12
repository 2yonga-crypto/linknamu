type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-zinc-200 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={`${name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-full w-full p-4 text-zinc-400 dark:text-zinc-600"
            aria-hidden="true"
          >
            <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9z" />
          </svg>
        )}
      </div>
      <div>
        <h1 className="text-xl font-bold text-foreground">{name}</h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
