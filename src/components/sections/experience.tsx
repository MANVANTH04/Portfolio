import { CheckCircle } from "lucide-react";
import { ViewControlledAnimation } from "../animated-components";
import { SectionShell, SectionTitle } from "../ui-elements";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "JJ Tech",
    location: "USA, Remote",
    period: "Jan 2025 – June 2025",
    tasks: [
      "Boosted page responsiveness by 30% using React.js + Redux.",
      "Reduced API load times by 25% through optimization & caching.",
      "Worked in Agile sprint cycles with daily Git-based code reviews.",
      "Implemented type-safe systems using TypeScript + Zod.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <ViewControlledAnimation>
        <SectionTitle>Professional Journey</SectionTitle>
      </ViewControlledAnimation>
      
      <ViewControlledAnimation delay={0.4}>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-4 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-12 md:pl-0">
              {/* Timeline dot */}
              <div className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-primary/20 md:left-1/2"></div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}`}>
                  <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
                  <h3 className="font-headline text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-lg font-semibold text-primary">{exp.company} <span className="text-sm text-muted-foreground">({exp.location})</span></p>
                </div>
                
                <div className={`mt-4 w-full md:mt-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1'}`}>
                  <div className="rounded-lg border border-border bg-card/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-primary/10">
                    <ul className="space-y-3">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ViewControlledAnimation>
    </SectionShell>
  );
}
