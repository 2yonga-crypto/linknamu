import LinkCard, { type LinkItem } from "./LinkCard";

type LinkCardListProps = {
  links: LinkItem[];
};

export default function LinkCardList({ links }: LinkCardListProps) {
  return (
    <ul className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
