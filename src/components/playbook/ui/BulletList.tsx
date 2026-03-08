interface BulletListProps {
  items: string[];
  ordered?: boolean;
}

export const BulletList = ({ items, ordered = false }: BulletListProps) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`my-4 space-y-2 ${ordered ? "list-decimal" : "list-disc"} pl-5`}>
      {items.map((item, i) => (
        <li key={i} className="text-sm text-foreground/70 leading-relaxed pl-1 marker:text-primary/40">
          {item}
        </li>
      ))}
    </Tag>
  );
};