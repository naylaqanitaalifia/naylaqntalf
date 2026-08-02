import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import { works } from "@/data/works";

function WorkDetail() {
  const { slug } = useParams();
  const work = works.find((work) => work.slug === slug);
  const tools = work?.tools?.join(", ");

  if (!work) {
    return <div className="">Work not found.</div>;
  }

  return (
    <div className="mx-auto max-w-6xl py-20">
      <div className="flex flex-col gap-4 text-secondary">
        <h1 className="text-4xl font-blinker">{work.title}</h1>
        <p className="text-base font-sulphur text-muted-foreground">
          lorem ipsum
        </p>
        <Separator />
      </div>

      <div className="flex flex-col gap-12 py-8">
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
            Description
          </h4>
          <p className="font-sulphur text-muted-foreground">
            {work.description}
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Tools
            </h4>
            <p className="font-sulphur text-muted-foreground">{tools}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Timeline
            </h4>
            <p className="font-sulphur text-muted-foreground">
              {work.timeline}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Role
            </h4>
            <p className="font-sulphur text-muted-foreground">{work.role}</p>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Problem Statement
            </h4>
            <p className="font-sulphur text-muted-foreground">
              {work.problem_statement}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Solution
            </h4>
            {/* <ul className="list-disc list-inside font-sulphur text-muted-foreground">
              <li>
                Provide a more personalized and special experience for users
                through the benefits they receive at each membership level.
              </li>
              <li>
                Increase user engagement by encouraging more frequent shopping
                within the Voila app.
              </li>
              <li>
                Build long-term user loyalty by creating a sense of appreciation
                that grows as their membership level increases.
              </li>
            </ul> */}
            <p className="font-sulphur text-muted-foreground">
              {work.solution}
            </p>
          </div>
        </div>

        <img src={work.gallery[0]} alt={work.title} className="rounded-xl object-cover" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={work.gallery[1]} alt={work.title} className="w-full h-96 rounded-xl object-cover" />

          <img src={work.gallery[2]} alt={work.title} className="w-full h-96 rounded-xl object-cover" />
        </div>

        <img src={work.gallery[3]} alt={work.title} className="rounded-xl object-cover" />
      </div>
    </div>
  );
}

export default WorkDetail;
