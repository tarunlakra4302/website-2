import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DopagoProjectPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6">Dopago</h1>
            <h2 className="text-3xl font-medium mb-16">We are all addicts now</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-sm text-gray-500 uppercase mb-2">Overview</h3>
                <p className="text-base">
                  Dopago is a digital health application focused on addiction recovery. The project
                  explores how technology can help people overcome addictive behaviors through AI therapy,
                  gamification, and personalized interventions. I conducted extensive user research
                  and designed interfaces that balance engagement with therapeutic effectiveness.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">My Role</h3>
                  <p className="text-base mb-4">
                    Design Researcher<br />
                    Product Design, User Research, UX/UI Design
                  </p>

                  <h3 className="text-sm text-gray-500 uppercase mb-2">Details</h3>
                  <p className="text-base">
                    Case Study<br />
                    Digital Health<br />
                    AI Therapy<br />
                    Gamification
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">Tools</h3>
                  <p className="text-base mb-4">
                    Figma<br />
                    User Interviews<br />
                    Prototype Testing
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-medium mb-4">Project Details</h2>
              <p className="text-lg mb-8">
                Dopago leverages AI to provide personalized therapy for individuals struggling with various
                forms of addiction. The application uses gamification elements to maintain engagement
                while providing therapeutic interventions backed by scientific research.
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                <Image
                  src="https://ext.same-assets.com/3534979029/3729652716.png"
                  alt="Dopago application interface"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-medium mb-2">Research Findings</h3>
                  <p>
                    Our research showed that users were more likely to continue with therapy
                    when it included game-like elements and positive reinforcement. The personalized
                    AI approach allowed for interventions that evolved with the user's progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Design Approach</h3>
                  <p>
                    The interface was designed to be calming yet engaging, with careful consideration
                    given to color psychology and interaction patterns. We focused on creating a
                    judgment-free experience that users would want to return to daily.
                  </p>
                </div>
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
