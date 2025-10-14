"use client";

import { Github, Linkedin, Mail, Send, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { SectionShell, SectionTitle } from "../ui-elements";
import Link from "next/link";
import { ViewControlledAnimation } from "../animated-components";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import { Card, CardContent } from "../ui/card";

const contactDetails = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    label: "Email",
    value: "manvanth.sai.kothuri@gmail.com",
    href: "mailto:manvanth.sai.kothuri@gmail.com",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    label: "Phone",
    value: "+91 79896 33677",
    href: "tel:+917989633677",
  },
  {
    icon: <Linkedin className="h-8 w-8 text-primary" />,
    label: "LinkedIn",
    value: "manvanth-kothuri",
    href: "https://www.linkedin.com/in/manvanth-kothuri/",
  },
  {
    icon: <Github className="h-8 w-8 text-primary" />,
    label: "GitHub",
    value: "manvanth5",
    href: "https://github.com/manvanth5",
  },
];

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a dummy handler. In a real app, this would use a service like EmailJS.
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };


  return (
    <SectionShell id="contact">
      <ViewControlledAnimation>
        <SectionTitle>Let's Build Something Extraordinary.</SectionTitle>
      </ViewControlledAnimation>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ViewControlledAnimation delay={0.4} className="space-y-8">
          <p className="text-lg text-muted-foreground">
            Have a project in mind, a question, or just want to connect? I'm always open to discussing new ideas and opportunities. Feel free to reach out.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <Card key={detail.label} className="bg-card/50 transition-all hover:border-primary hover:shadow-primary/10">
                <a href={detail.href} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                    {detail.icon}
                    <p className="mt-4 font-semibold text-foreground">{detail.label}</p>
                    <p className="text-sm text-muted-foreground break-all">{detail.value}</p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </ViewControlledAnimation>

        <ViewControlledAnimation delay={0.6}>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border bg-card/50 p-8 shadow-lg backdrop-blur-sm">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell me about your project or idea..." required rows={5} className="bg-background/50" />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </ViewControlledAnimation>
      </div>
    </SectionShell>
  );
}
