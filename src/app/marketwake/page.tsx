import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function MarketwakeProjectPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6">Marketwake</h1>
            <h2 className="text-3xl font-medium mb-16">The Client Command Center</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-sm text-gray-500 uppercase mb-2">Overview</h3>
                <p className="text-base">
                  Marketwake is a B2B marketing agency that needed a client command center dashboard to help their clients
                  track and manage their marketing campaigns. I designed a centralized platform that provides their clients
                  with clear visibility into campaign performance, deliverables, and communication.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">My Role</h3>
                  <p className="text-base mb-4">
                    UX Architect<br />
                    Dashboard Design, User Research, Wireframing, Prototyping
                  </p>

                  <h3 className="text-sm text-gray-500 uppercase mb-2">Details</h3>
                  <p className="text-base">
                    2023 Fall<br />
                    Dashboard<br />
                    B2B<br />
                    Client-facing
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">Tools</h3>
                  <p className="text-base mb-4">
                    Figma<br />
                    Rapid Prototyping
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-medium mb-4">Project Details</h2>
              <p className="text-lg mb-8">
                The Client Command Center is a comprehensive dashboard that provides Marketwake's clients with a
                complete view of their marketing performance across multiple channels. The dashboard includes
                campaign metrics, content calendars, and communication tools in one centralized platform.
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 bg-gray-100">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                  Dashboard Preview Image
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
