import { SectionTitle } from "../ui/section-title";

type Props = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  titleClassName?: string;
};

function Section({ id, title, children, titleClassName }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl py-24">
      {title && <SectionTitle title={title} className={titleClassName} />}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export { Section };
