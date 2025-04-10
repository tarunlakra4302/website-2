import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

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
