import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-24 px-6">
        <div className="w-full max-w-3xl mx-auto mb-24">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6">
              I'm a product designer focused on creating intuitive and meaningful digital experiences.
            </p>

            <p className="mb-6">
              With a background in both design and technology, I bridge the gap between aesthetics and functionality.
              I believe in designing products that not only look beautiful but also solve real problems for users.
            </p>

            <p className="mb-6">
              I simplify the complex and humanize technology to create products that resonate with people.
              My approach combines empathy, research, and creative problem-solving to deliver impactful solutions.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Experience</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium">Product Designer</h3>
                <p className="text-gray-600">Hanwha · Summer 2023</p>
                <p>Led the design of Vugle, an internal startup focused on improving healthcare claims for U.S. veterans.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">UX Architect</h3>
                <p className="text-gray-600">Marketwake · Fall 2023</p>
                <p>Designed a client command center dashboard for a B2B marketing agency.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Design Researcher</h3>
                <p className="text-gray-600">Dopago · 2023</p>
                <p>Conducted research and designed interfaces for a digital health application focused on addiction recovery.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Education</h2>

            <div>
              <h3 className="text-xl font-medium">University of California, Berkeley</h3>
              <p className="text-gray-600">B.A. in Computer Science</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
