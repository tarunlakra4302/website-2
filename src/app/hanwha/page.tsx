import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HanwhaProjectPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6">Letting you in.</h1>
            <div className="text-xl mb-4">Vugle - sponsored by Hanwha</div>
            <h2 className="text-3xl font-medium mb-16">Raising the Financial Lifeline for Those Who Served</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-sm text-gray-500 uppercase mb-2">At-A-Glance</h3>
                <p className="text-base">
                  Hanwha is a global Fortune 500 company and also a financial powerhouse in Asia.
                  This summer, I interned there as a product designer and co-founded an internal startup,
                  Vugle, which revolutionizes the U.S. veteran healthcare claim process.
                  With Dex, our AI agent, veterans can easily navigate complex systems,
                  reduce claim times, and unlock the full benefits they deserve.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">My Role</h3>
                  <p className="text-base mb-4">
                    Product Designer<br />
                    Interaction Design, Visual Design, User Flows, Rapid Prototyping
                  </p>

                  <h3 className="text-sm text-gray-500 uppercase mb-2">Team</h3>
                  <p className="text-base">
                    Anthony Kim, PM<br />
                    Sooah Park, BDM<br />
                    Yoon Lee, SWE<br />
                    Dan Chung, MM
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">Timeline</h3>
                  <p className="text-base mb-4">
                    Seoul & San Francisco<br />
                    June - Aug 2023
                  </p>

                  <h3 className="text-sm text-gray-500 uppercase mb-2">Tools</h3>
                  <p className="text-base">
                    Figma, Origami Studio
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-sm text-gray-500 uppercase mb-4">HIGHLIGHTS</h3>

            <div className="mb-16">
              <h2 className="text-2xl font-medium mb-4">AI Benefits Claim Guide: Fully automated, personalized</h2>
              <p className="text-lg mb-8">
                No more confusion, unnecessary waits, and being shortchanged. From claiming disability compensation to
                personalized VA & retail deals, Vugle streamlines every benefits claim process for those who served.
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                <Image
                  src="https://ext.same-assets.com/4186590003/3992637118.svg"
                  alt="Benefits claim guide"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-2">AI Compensation Buddy</h3>
                  <p>
                    Dex helps veterans by securely accessing and analyzing their medical and military records,
                    identifying all possible claims, and guiding them through each phase of the application.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Never Miss Anything</h3>
                  <p>
                    The way VA Disability Rating is calculated is by combining all the conditions you have.
                    And too many of them often miss to submit every details of it. Dex analyzes your current
                    condition and list every potential conditions that are most likely.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Make the best approach</h3>
                  <p>
                    There are too many types of claims exist and it's important to submit the right one to reduce
                    unnecessary waits. Dex finds you the best strategy for you to receive benefits faster and also more.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-medium mb-4">Personalized Benefits</h2>
              <p className="text-lg mb-8">
                Offers a personalized dashboard that highlights all benefits a veteran is eligible for,
                tailored to their service history for easy access and application.
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                <Image
                  src="https://ext.same-assets.com/4186590003/2687626341.svg"
                  alt="Personalized benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <a
            href="/"
            className="inline-block px-5 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
