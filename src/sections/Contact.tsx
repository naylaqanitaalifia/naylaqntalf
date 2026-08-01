import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Discuss a project?</h1>
            <p className="text-base text-muted-foreground">
              Currently open for freelance or full-time collaboration. Send a
              message via the form, or directly through the channels below.
            </p>
          </div>
          <u className="flex flex-col gap-2 text-sm">
            <li>
              <a href="">naylaqanitaalifia@gmail.com</a>
            </li>
            <li>
              <a href="">Nayla Qanita Alifia</a>
            </li>
            <li>
              <a href="">Nayla Qanita Alifia</a>
            </li>
          </u>
        </div>
        <div className="border border-border rounded-2xl p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p>From</p>
              <input
                type="text"
                placeholder="you@example.com"
                className="border-b border-border pb-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p>Subject</p>
              <input
                type="text"
                placeholder="you@example.com"
                className="border-b border-border pb-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p>Message</p>
              <textarea
                placeholder="you@example.com"
                className="border-b pb-8 border-border focus:outline-none"
              />
            </div>
            <Button className="self-end">Send</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
