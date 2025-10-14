import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Icons } from "../icons";
import { ArrowUpRight, Camera, Map } from "lucide-react";
import { ViewControlledAnimation } from "../animated-components";
import { SectionShell, SectionTitle } from "../ui-elements";

const projects = [
  {
    name: "Second Brain – AI Knowledge Hub",
    description: "A smart content organizer integrating OpenAI embeddings for semantic search and content retrieval under 1s latency.",
    stack: [
      { name: "Next.js", icon: <Icons.NextJs className="h-4 w-4" /> },
      { name: "Node.js", icon: <Icons.NodeJs className="h-4 w-4" /> },
      { name: "MongoDB", icon: <Icons.MongoDB className="h-4 w-4" /> },
      { name: "OpenAI", icon: <Icons.OpenAI className="h-4 w-4" /> },
      { name: "Pinecone", icon: <Icons.Pinecone className="h-4 w-4" /> },
    ],
    link: "https://github.com/manvanth5",
  },
  {
    name: "Crisis Connect – Real-Time Disaster System",
    description: "Designed a real-time disaster management system using Gemini Vision for analyzing satellite imagery, improving coordination by 50%.",
    stack: [
      { name: "React", icon: <Icons.ReactJs className="h-4 w-4" /> },
      { name: "Node.js", icon: <Icons.NodeJs className="h-4 w-4" /> },
      { name: "Supabase", icon: <Icons.Supabase className="h-4 w-4" /> },
      { name: "Mapbox", icon: <Map className="h-4 w-4" /> },
      { name: "Gemini Vision", icon: <Camera className="h-4 w-4" /> },
    ],
    link: "https://github.com/manvanth5",
  },
  {
    name: "Retena – Eye-Controlled Mouse",
    description: "Created an accessibility tool enabling gaze-based mouse control with 90%+ accuracy, using Python, OpenCV, and MediaPipe.",
    stack: [
      { name: "Python", icon: <Icons.Python className="h-4 w-4" /> },
      { name: "OpenCV", icon: <Camera className="h-4 w-4" /> },
      { name: "MediaPipe", icon: <Camera className="h-4 w-4" /> },
    ],
    link: "https://github.com/manvanth5",
  },
];

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <ViewControlledAnimation>
        <SectionTitle>Featured Projects</SectionTitle>
      </ViewControlledAnimation>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ViewControlledAnimation key={project.name} delay={0.4 + index * 0.2}>
            <Card className="flex h-full flex-col overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <CardTitle className="font-headline text-2xl font-bold">{project.name}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 bg-primary/10 text-primary ring-1 ring-primary/20">
                      {tech.icon}
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="group w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </ViewControlledAnimation>
        ))}
      </div>
    </SectionShell>
  );
}
