import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      id: "1",
      company: "Hanwha",
      title: "No More Lonely Battles",
      href: "/hanwha",
      tags: [
        { id: "tag1", label: "U.S Veterans" },
        { id: "tag2", label: "AI Healthcare" },
        { id: "tag3", label: "Benefits Claim" },
        { id: "tag4", label: "Veterans Affairs" },
        { id: "tag5", label: "Disability Compensation" },
      ],
      image: "https://ext.same-assets.com/3534979029/3985503883.svg"
    },
    {
      id: "2",
      company: "Marketwake",
      title: "The Client Command Center",
      href: "/marketwake",
      tags: [
        { id: "tag1", label: "2023 Fall" },
        { id: "tag2", label: "Dashboard" },
        { id: "tag3", label: "B2B" },
        { id: "tag4", label: "Client-facing" },
        { id: "tag5", label: "Rapid Prototyping" },
      ],
      image: "https://ext.same-assets.com/3534979029/42007322.png"
    },
    {
      id: "3",
      company: "Dopago",
      title: "We are all addicts now",
      href: "/dopago",
      tags: [
        { id: "tag1", label: "Case Study" },
        { id: "tag2", label: "Digital Health" },
        { id: "tag3", label: "AI Therapy" },
        { id: "tag4", label: "Gamification" },
        { id: "tag5", label: "Product Design / Research" },
      ],
      image: "https://ext.same-assets.com/3534979029/3729652716.png"
    },
    {
      id: "4",
      company: "Torqata",
      title: "Dashboard for retailers",
      href: "/torqata",
      tags: [
        { id: "tag1", label: "NDA" },
        { id: "tag2", label: "UX Architect" },
        { id: "tag3", label: "B2B SaaS" },
        { id: "tag4", label: "Dashboard" },
        { id: "tag5", label: "Interaction Design" },
      ],
      image: "https://ext.same-assets.com/3534979029/42007322.png"
    }
  ];

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full max-w-5xl mx-auto px-6">
          <Hero />

          <SectionDivider title="CRAFT" />

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                company={project.company}
                title={project.title}
                href={project.href}
                tags={project.tags}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
