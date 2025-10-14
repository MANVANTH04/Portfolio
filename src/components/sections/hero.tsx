import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Rocket } from "lucide-react";
import { AnimatedSubtitle, ViewControlledAnimation } from "../animated-components";

const subtitles = ["Full Stack Developer", "Cloud Engineer", "AI Integrator"];

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
      <div className="container relative z-10 mx-auto px-4">
        <ViewControlledAnimation>
          <div className="mb-6 font-code text-center text-sm text-muted-foreground md:text-base">
            <p><span className="text-secondary">const</span> <span className="text-primary">developer</span> = &#123;</p>
            <p>name: <span className="text-accent-foreground">'Manvanth'</span>,</p>
            <p>passion: <span className="text-accent-foreground">'building_the_future'</span></p>
            <p>&#125;;</p>
          </div>
          <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl gradient-text">
            KOTHURI MANVANTH SAI
          </h1>
        </ViewControlledAnimation>
        <ViewControlledAnimation delay={0.2}>
          <p className="mx-auto mt-4 max-w-3xl font-medium text-muted-foreground sm:text-xl md:text-2xl">
            Building the Future of the Web — One Scalable System at a Time
          </p>
        </ViewControlledAnimation>
        
        <ViewControlledAnimation delay={0.4}>
          <div className="mt-6">
            <AnimatedSubtitle subtitles={subtitles} />
          </div>
        </ViewControlledAnimation>
        
        <ViewControlledAnimation delay={0.6}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="group w-full sm:w-auto">
              <Link href="#projects">
                <Rocket className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12" />
                View Projects
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group w-full sm:w-auto">
              <a href="/Manvanth_Kothuri_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                Download Resume
              </a>
            </Button>
          </div>
        </ViewControlledAnimation>
      </div>
    </section>
  );
}
