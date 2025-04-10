import { ProjectPage } from "@/components/project-page";

export default function MarketwakePage() {
  return (
    <ProjectPage
      title="The Client Command Center"
      subtitle="Centralized client management dashboard"
      company="Marketwake"
      description="A dashboard that helps marketing agencies manage their clients efficiently."
      imageSrc="https://ext.same-assets.com/3534979029/3729652716.png"
      content={
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p>
              The Client Command Center is a dashboard designed for marketing agencies to manage their clients efficiently. It provides a centralized location for all client-related information and activities.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p>
              I led the UX/UI design for this dashboard, focusing on creating an intuitive interface that helps marketing teams quickly access and analyze client data.
            </p>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-semibold uppercase mb-8">Key Features</h2>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Centralized Dashboard</h3>
              <p>
                All client information is available in one place, making it easy to track performance and manage accounts efficiently.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Real-time Analytics</h3>
              <p>
                The dashboard provides real-time updates on key performance indicators, helping teams make data-driven decisions quickly.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Customizable Widgets</h3>
              <p>
                Teams can customize their dashboard view to focus on the metrics that matter most to their specific clients.
              </p>
            </div>
          </section>
        </div>
      }
    />
  );
}
