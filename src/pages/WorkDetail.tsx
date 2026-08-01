import { Separator } from "@/components/ui/separator";
import workDetailImage from "@/assets/stitchfind.png";

function WorkDetail() {
  return (
    <div className="mx-auto max-w-6xl py-20">
      <div className="flex flex-col gap-4 text-secondary">
        <h1 className="text-4xl font-blinker">tes</h1>
        <p className="text-base font-sulphur text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          modi repellendus eum unde reprehenderit iusto molestiae illo,
          consectetur atque hic non? Commodi, doloremque veritatis itaque culpa
          omnis ea perspiciatis aspernatur architecto? Iure laboriosam quos
          sapiente minus nesciunt, aliquid, natus soluta fugit labore debitis
          accusamus necessitatibus sint aperiam, repudiandae fuga esse?
        </p>
        <Separator />
      </div>

      <div className="flex flex-col gap-12">
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
            Description
          </h4>
          <p className="font-sulphur text-muted-foreground">
            The Voila Loyalty Membership encourages users to shop more by
            offering a tiered system. As users shop, they move up levels,
            unlocking better benefits like discounts and exclusive offers. The
            higher the level, the more rewards they get, motivating them to keep
            shopping and enjoy more perks.
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Tools
            </h4>
            <p className="font-sulphur text-muted-foreground">Figma</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Timeline
            </h4>
            <p className="font-sulphur text-muted-foreground">8 months</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Role
            </h4>
            <p className="font-sulphur text-muted-foreground">
              Front End Developer
            </p>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Problem Statement
            </h4>
            <p className="font-sulphur text-muted-foreground">
              We aim to provide better service and appreciation to Voila’s loyal
              users by creating a membership system that encourages them to shop
              more frequently while making them feel valued. With the tiered
              membership system, users will enjoy increasing benefits and
              special services as they level up. The goal is to enhance user
              connection and loyalty to the Voila app.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-blinker font-semibold text-secondary uppercase leading-7 tracking-widest">
              Goals
            </h4>
            <ul className="list-disc list-inside font-sulphur text-muted-foreground">
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
            </ul>
          </div>
        </div>

        <img src={workDetailImage} alt="" className="rounded-xl" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={workDetailImage} alt="" className="rounded-xl" />
          <img src={workDetailImage} alt="" className="rounded-xl" />
        </div>

        <img src={workDetailImage} alt="" className="rounded-xl" />
      </div>
    </div>
  );
}

export default WorkDetail;
