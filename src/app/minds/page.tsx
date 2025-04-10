import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MindsProjectPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-16">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full mb-4">
              ARCHIVED
            </div>
            <h1 className="text-5xl font-bold mb-6">Minds</h1>
            <h2 className="text-3xl font-medium mb-16">Experimental Project</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-sm text-gray-500 uppercase mb-2">Overview</h3>
                <p className="text-base">
                  Minds was an experimental project exploring the intersection of cognitive science and user interface design.
                  This project has been archived but served as an important learning experience and foundation for later work.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">My Role</h3>
                  <p className="text-base mb-4">
                    Design Researcher<br />
                    Concept Development
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-2">Status</h3>
                  <p className="text-base mb-4">
                    Archived<br />
                    2022
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-8 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Project content archived</p>
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
