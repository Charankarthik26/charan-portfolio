import { FadeIn } from "@/components/motion/fade-in";

export function PhilosophySection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-emerald-500">
            Philosophy
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Building products that balance performance, scalability, and
            thoughtful user experience.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 font-semibold">Performance First</h3>

              <p className="text-neutral-500">
                Fast experiences feel better. I focus on efficient systems,
                optimized rendering, and smooth interactions.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Scalable Architecture</h3>

              <p className="text-neutral-500">
                Clean abstractions and maintainable systems make products easier
                to evolve over time.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">User-Centered Engineering</h3>

              <p className="text-neutral-500">
                Great software is not just functional. It should feel intuitive,
                responsive, and enjoyable to use.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
