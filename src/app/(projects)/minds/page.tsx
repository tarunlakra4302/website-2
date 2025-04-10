import { ProjectPage } from "@/components/project-page";

export default function MindsPage() {
  return (
    <ProjectPage
      title="Minds"
      subtitle="Mental health support through digital connection"
      company="Archived Project"
      description="An application focused on providing mental health support and resources through digital connection."
      imageSrc="https://ext.same-assets.com/3534979029/3985503883.svg"
      content={
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p>
              Minds was an experimental project aimed at providing mental health support through digital connection. The platform was designed to connect users with mental health resources and create a supportive community for those dealing with mental health challenges.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Archived Status</h2>
            <p>
              This project has been archived and is no longer in active development. The concepts and insights gained from this project have influenced other mental health focused applications I've worked on, particularly in the areas of AI therapy and digital well-being.
            </p>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-semibold uppercase mb-8">Key Learnings</h2>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">User Privacy in Mental Health</h3>
              <p>
                The project provided valuable insights into designing with privacy as a top priority for sensitive mental health data.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Supportive Digital Spaces</h3>
              <p>
                Creating safe, supportive digital environments requires careful consideration of moderation, content guidelines, and community management.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Integration with Professional Support</h3>
              <p>
                Digital mental health solutions work best when integrated with professional mental health support systems rather than attempting to replace them.
              </p>
            </div>
          </section>
        </div>
      }
    />
  );
}
