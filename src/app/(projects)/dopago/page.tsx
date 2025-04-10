import { ProjectPage } from "@/components/project-page";

export default function DopagoPage() {
  return (
    <ProjectPage
      title="We are all addicts now"
      subtitle="Digital well-being through AI therapy"
      company="Dopago"
      description="An AI-powered app that helps users manage digital addiction and improve mental well-being."
      imageSrc="https://ext.same-assets.com/3534979029/42007322.png"
      content={
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p>
              Dopago is an innovative app designed to help users overcome digital addiction through AI-powered therapy techniques and gamification. The app provides personalized support to help users establish healthier digital habits.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p>
              As the lead product designer, I conducted extensive research on digital addiction patterns and worked closely with mental health experts to develop an interface that effectively engages users while promoting healthy digital habits.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <h3 className="text-lg font-medium">Research Areas</h3>
                <ul className="mt-2 space-y-1">
                  <li>Digital Health</li>
                  <li>Behavioral Psychology</li>
                  <li>Gamification</li>
                  <li>AI Therapy</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-xl font-semibold uppercase mb-8">Key Features</h2>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">AI Therapy Sessions</h3>
              <p>
                Personalized therapy sessions powered by AI that adapt to the user's specific addiction patterns and progress.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Gamified Recovery</h3>
              <p>
                Progress tracking with rewards and achievements to keep users motivated throughout their recovery journey.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-medium mb-3">Community Support</h3>
              <p>
                A supportive community of users sharing similar experiences, providing encouragement and accountability.
              </p>
            </div>
          </section>
        </div>
      }
    />
  );
}
