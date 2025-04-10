import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-24 px-6">
        <div className="w-full max-w-3xl mx-auto mb-24">
          <h1 className="text-4xl font-bold mb-8">Lab</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-12">
              This is where I experiment with new ideas, tools, and concepts.
              Stay tuned for updates - exciting projects coming soon!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <p className="text-gray-400">Experiment 01</p>
              </div>

              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <p className="text-gray-400">Experiment 02</p>
              </div>

              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <p className="text-gray-400">Experiment 03</p>
              </div>

              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <p className="text-gray-400">Experiment 04</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
