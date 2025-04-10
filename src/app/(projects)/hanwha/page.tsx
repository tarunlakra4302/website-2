import { ProjectPage } from "@/components/project-page";

export default function HanwhaPage() {
  return (
    <ProjectPage
      title="No More Lonely Battles"
      subtitle="Raising the Financial Lifeline for Those Who Served"
      company="Vugle - sponsored by Hanwha"
      description="A project to help U.S. veterans navigate complex healthcare claim processes with the help of AI."
      imageSrc="https://ext.same-assets.com/3534979029/3985503883.svg"
      content={
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">At-A-Glance</h2>
            <p>
              Hanwha is a global Fortune 500 company and also a financial powerhouse in Asia. This summer, I interned there as a product designer and co-founded an internal startup, Vugle, which revolutionizes the U.S. veteran healthcare claim process. With Dex, our AI agent, veterans can easily navigate complex systems, reduce claim times, and unlock the full benefits they deserve.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p>
              Product Designer - Interaction Design, Visual Design, User Flows, Rapid Prototyping
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <h3 className="text-lg font-medium">Team</h3>
                <ul className="mt-2 space-y-1">
                  <li>Anthony Kim, PM</li>
                  <li>Sooah Park, BDM</li>
                  <li>Yoon Lee, SWE</li>
                  <li>Dan Chung, MM</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Timeline</h3>
                <p className="mt-2">Seoul & San Francisco<br />June - Aug 2024</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Tools</h3>
                <p className="mt-2">Figma, Origami Studio</p>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-semibold uppercase mb-8">Highlights</h2>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">AI Benefits Claim Guide: Fully automated, personalized</h3>
              <p>
                No more confusion, unnecessary waits, and being shortchanged. From claiming disability compensation to personalized VA & retail deals, Vugle streamlines every benefits claim process for those who served.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">AI Compensation Buddy</h3>
              <p>
                Dex helps veterans by securely accessing and analyzing their medical and military records, identifying all possible claims, and guiding them through each phase of the application.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Never Miss Anything</h3>
              <p>
                The way VA Disability Rating is calculated is by combining all the conditions you have. And too many of them often miss to submit every details of it. Dex analyzes your current condition and list every potential conditions that are most likely.
              </p>
            </div>
          </section>
        </div>
      }
    />
  );
}
