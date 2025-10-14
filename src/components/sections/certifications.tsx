import { ViewControlledAnimation } from "../animated-components";
import { SectionShell, SectionTitle } from "../ui-elements";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    id: "CSA-A1B2C3D4E5F6",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    id: "AZ900-F6E5D4C3B2A1",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    name: "MERN Stack Development",
    issuer: "University of Skills",
    id: "MERN-G1H2I3J4K5L6",
    gradient: "from-green-400 to-teal-500",
  },
];

export function CertificationsSection() {
  return (
    <SectionShell id="certifications">
      <ViewControlledAnimation>
        <SectionTitle>Credentials & Certifications</SectionTitle>
      </ViewControlledAnimation>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <ViewControlledAnimation key={cert.name} delay={0.4 + index * 0.2}>
            <div className="group relative h-56 w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm"></div>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{cert.issuer}</p>
                  <h3 className="mt-2 font-headline text-2xl font-bold text-foreground">{cert.name}</h3>
                </div>
                <div className="flex items-end justify-between">
                  <p className="font-mono text-sm text-muted-foreground">{cert.id}</p>
                  <div className={`h-8 w-14 rounded-md bg-gradient-to-r ${cert.gradient} opacity-70 transition-opacity group-hover:opacity-100`}></div>
                </div>
              </div>
              <div className={`absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-r ${cert.gradient} opacity-10 transition-all duration-500 group-hover:scale-[8] group-hover:opacity-[0.08]`}></div>
            </div>
          </ViewControlledAnimation>
        ))}
      </div>
    </SectionShell>
  );
}
