import { AmbientBackground } from "@/components/shared/ambient-background";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { FadeIn } from "@/components/motion/fade-in";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Navbar } from "@/components/layout/navbar";
import { PhilosophySection } from "@/sections/philosophy-section";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <AmbientBackground />
      <Navbar />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <FadeIn delay={0.1}>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-emerald-500">
            Full Stack Product Engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Building immersive digital systems with thoughtful engineering.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-500">
            I craft scalable full stack experiences focused on performance,
            interaction design, and modern product engineering.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>View Projects</MagneticButton>

            <ThemeToggle />
          </div>
        </FadeIn>
      </section>
      <PhilosophySection />
    </main>
  );
}
