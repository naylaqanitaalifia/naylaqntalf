import { cn } from "@/lib/utils";

type Props = {
  title: string;
  className?: string;
};

function SectionTitle({ title, className }: Props) {
  return (
    <h5
      className={cn(
        "text-3xl md:text-4xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest",
        className,
      )}
    >
      {title}
    </h5>
  );
}

export { SectionTitle };
