import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import { works } from "@/data/works";
import OtherWorks from "@/sections/OtherWork";
import Footer from "@/sections/Footer";

function WorkDetail() {
  const { slug } = useParams();
  const work = works.find((work) => work.slug === slug);
  const tools = work?.tools?.join(", ");

  if (!work) {
    return <div className="">Work not found.</div>;
  }

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-20">
        <div className="flex flex-col gap-2 md:gap-4 text-secondary">
          <h1 className="text-3xl md:text-4xl font-blinker">{work.title}</h1>
          <p className="text-sm md:text-base font-sulphur text-muted-foreground tracking-wide">
            {work.summary}
          </p>
          <Separator />
        </div>

        <div className="flex flex-col gap-8 md:gap-12 py-4 md:py-8">
          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg md:text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Description
            </h4>
            <p className="font-sulphur text-sm md:text-base text-muted-foreground tracking-wide">
              {work.description}
            </p>
          </div>

          {/*  */}
          <div className="grid grid-cols-3 gap-12">
            <div className="flex flex-col gap-1 md:gap-2">
              <h4 className="text-base md:text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
                Tools
              </h4>
              <p className="font-sulphur text-muted-foreground">{tools}</p>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
              <h4 className="text-base md:text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
                Timeline
              </h4>
              <p className="font-sulphur text-sm md:text-base text-muted-foreground tracking-wide">
                {work.timeline}
              </p>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
              <h4 className="text-base md:text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
                Role
              </h4>
              <p className="font-sulphur text-sm md:text-base text-muted-foreground tracking-wide">
                {work.role}
              </p>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="flex flex-col gap-2">
              <h4 className="text-base md:text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
                Problem Statement
              </h4>
              <p className="font-sulphur text-sm md:text-base text-muted-foreground tracking-wide">
                {work.problem_statement}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-base md:text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
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
              <p className="font-sulphur text-sm md:text-base text-muted-foreground tracking-wide">
                {work.solution}
              </p>
            </div>
          </div>

          {work.gallery?.[0] && (
            <img
              src={work.gallery[0]}
              alt={work.title}
              className="rounded-xl object-cover"
            />
          )}

          {work.gallery && work.gallery.length >= 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={work.gallery[1]}
                alt={work.title}
                className="w-full h-96 rounded-xl object-cover"
              />

              <img
                src={work.gallery[2]}
                alt={work.title}
                className="w-full h-96 rounded-xl object-cover"
              />
            </div>
          )}

          {work.gallery?.[3] && (
            <img
              src={work.gallery[3]}
              alt={work.title}
              className="rounded-xl object-cover"
            />
          )}

          <OtherWorks currentSlug={work.slug} />
        </div>
      </div>
      <div className="mx-auto max-w-6xl md:py-8">
        <Footer />
      </div>
    </>
  );
}

export default WorkDetail;
