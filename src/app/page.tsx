import { AmbientBackground } from "@/components/shared/ambient-background";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { FadeIn } from "@/components/motion/fade-in";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <AmbientBackground />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <FadeIn delay={0.1}>
          <p className="mb-4 font-mono text-sm tracking-widest text-emerald-500 uppercase">
            Full Stack Product Engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="max-w-4xl text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Building immersive digital systems with thoughtful engineering.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            I craft scalable full stack experiences focused on performance,
            interaction design, and modern product engineering.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8">
            <ThemeToggle />
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
