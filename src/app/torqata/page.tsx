import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TorqataProjectPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6">Torqata</h1>
            <h2 className="text-3xl font-medium mb-16">Dashboard for retailers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-sm text-gray-500 uppercase mb-2">Overview</h3>
                <p className="text-base">
                  Torqata is a B2B SaaS platform that provides powerful analytics and data visualization for retailers.
                  I worked as a UX Architect to design an intuitive dashboard that helps retailers make data-driven
                  decisions about inventory, sales, and customer preferences. Due to NDA restrictions,
                  only limited information can be shared about this project.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">My Role</h3>
                  <p className="text-base mb-4">
                    UX Architect<br />
                    Dashboard Design, Information Architecture, User Flows
                  </p>

                  <h3 className="text-sm text-gray-500 uppercase mb-2">Details</h3>
                  <p className="text-base">
                    NDA<br />
                    B2B SaaS<br />
                    Dashboard<br />
                    Interaction Design
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">Tools</h3>
                  <p className="text-base mb-4">
                    Figma<br />
                    Data Visualization<br />
                    Prototyping
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-medium mb-4">Project Details</h2>
              <p className="text-lg mb-8">
                The dashboard provides retailers with a comprehensive view of their business performance,
                helping them to identify trends, optimize inventory, and improve customer satisfaction.
                It features customizable modules that allow users to focus on their most important metrics.
              </p>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 bg-gray-100">
                <div className="flex items-center justify-center h-full">
                  <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 30L25 10L37.5 30H12.5Z" stroke="black" strokeWidth="1.5"/>
                    <path d="M50 10H80V30H50V10Z" stroke="black" strokeWidth="1.5"/>
                    <path d="M100 20C100 14.4772 104.477 10 110 10C115.523 10 120 14.4772 120 20C120 25.5228 115.523 30 110 30C104.477 30 100 25.5228 100 20Z" stroke="black" strokeWidth="1.5"/>
                    <path d="M130 10H160C165.523 10 170 14.4772 170 20C170 25.5228 165.523 30 160 30H130V10Z" stroke="black" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-medium mb-2">Design Challenge</h3>
                  <p>
                    The main challenge was to create a dashboard that could present complex data in an
                    intuitive and actionable way. We needed to balance data density with clarity,
                    ensuring that users could quickly find the insights they needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Solution</h3>
                  <p>
                    We developed a modular dashboard architecture with progressive disclosure of data.
                    This allows users to see high-level metrics at a glance, while still being able to
                    drill down into detailed information when needed.
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
