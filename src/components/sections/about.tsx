import { Brain, Cloud, MessageSquare, Puzzle } from "lucide-react";
import { ViewControlledAnimation } from "../animated-components";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { SectionShell, SectionTitle } from "../ui-elements";

const highlights = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Proven Full-Stack Expertise",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Certified AWS & Azure Developer",
  },
  {
    icon: <Puzzle className="h-6 w-6" />,
    title: "Passion for AI-integrated systems",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Open for freelance & full-time roles",
  },
];

export function AboutSection() {
  return (
    <SectionShell id="about">
      <ViewControlledAnimation>
        <SectionTitle>Beyond Code, I Build Impact.</SectionTitle>
      </ViewControlledAnimation>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ViewControlledAnimation delay={0.4}>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I’m a Full Stack Developer passionate about building systems that scale — from intelligent web apps to AI-powered platforms.
            </p>
            <p>
              With expertise in TypeScript, Next.js, and cloud-native solutions (AWS, GCP), I craft products that blend engineering precision with creative vision. My goal is to not just write code, but to build impactful, scalable, and elegant solutions to real-world problems.
            </p>
          </div>
        </ViewControlledAnimation>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((highlight, index) => (
            <ViewControlledAnimation key={highlight.title} delay={0.6 + index * 0.2}>
              <Card className="flex h-full items-center bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="flex w-full flex-row items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    {highlight.icon}
                  </div>
                  <CardTitle className="font-headline text-lg font-medium text-foreground">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </ViewControlledAnimation>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
