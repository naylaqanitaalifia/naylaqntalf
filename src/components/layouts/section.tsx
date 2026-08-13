import { SectionTitle } from "../ui/section-title";

type Props = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  titleClassName?: string;
};

function Section({ id, title, children, titleClassName }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-24 lg:px-0">
      {title && <SectionTitle title={title} className={titleClassName} />}
      <div className="mt-4 md:mt-8">{children}</div>
    </section>
  );
}

export { Section };
