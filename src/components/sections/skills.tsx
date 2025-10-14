import { ViewControlledAnimation } from "../animated-components";
import { Badge } from "../ui/badge";
import { SectionShell, SectionTitle } from "../ui-elements";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Supabase", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Vercel"],
  },
  {
    title: "AI/ML",
    skills: ["OpenAI API", "Pinecone", "Semantic Search"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
];

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <ViewControlledAnimation>
        <SectionTitle>Technical Skills</SectionTitle>
      </ViewControlledAnimation>

      <div className="space-y-10">
        {skillCategories.map((category, index) => (
          <ViewControlledAnimation key={category.title} delay={0.4 + index * 0.1}>
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-4">
              <h3 className="font-headline text-xl font-semibold text-primary md:text-right">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 md:col-span-3">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="transform-gpu rounded-lg border-2 border-border px-4 py-2 text-base text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </ViewControlledAnimation>
        ))}
      </div>
    </SectionShell>
  );
}
