import { ProjectPage } from "@/components/project-page";

export default function TorqataPage() {
  return (
    <ProjectPage
      title="Dashboard for retailers"
      subtitle="Intuitive data visualization for retail insights"
      company="Torqata"
      description="A comprehensive dashboard solution for retailers to make data-driven decisions."
      imageSrc="https://ext.same-assets.com/3534979029/42007322.png"
      content={
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p>
              Torqata's dashboard for retailers is a B2B SaaS solution that transforms complex retail data into actionable insights. The platform helps retailers optimize inventory, understand customer behavior, and make informed business decisions.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p>
              As a UX architect, I designed the information architecture and interaction patterns for the dashboard, focusing on simplifying complex data visualizations for retail professionals with varying levels of technical expertise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <h3 className="text-lg font-medium">Project Details</h3>
                <ul className="mt-2 space-y-1">
                  <li>NDA Project</li>
                  <li>B2B SaaS Platform</li>
                  <li>Dashboard Design</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Tools</h3>
                <p className="mt-2">Figma, Tableau, SQL</p>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-semibold uppercase mb-8">Key Features</h2>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Intuitive Data Visualization</h3>
              <p>
                Complex retail data is presented through easy-to-understand visualizations that highlight important trends and insights at a glance.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Customizable Reporting</h3>
              <p>
                Retailers can create custom reports tailored to their specific business needs and export them in various formats.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Predictive Analytics</h3>
              <p>
                The dashboard leverages machine learning to provide predictive insights, helping retailers anticipate market trends and customer behavior.
              </p>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-semibold uppercase mb-8">Outcome</h2>
            <p>
              Due to NDA restrictions, detailed outcomes cannot be shared. However, the dashboard has been successfully implemented by multiple retail clients, resulting in significant improvements in inventory management and sales performance.
            </p>
          </section>
        </div>
      }
    />
  );
}
