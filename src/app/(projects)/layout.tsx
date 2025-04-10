import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
