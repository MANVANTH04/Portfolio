import { cn } from "@/lib/utils";

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionShell({ children, className, ...props }: SectionShellProps) {
  return (
    <section className={cn("container mx-auto px-4 py-20 md:py-28", className)} {...props}>
      {children}
    </section>
  );
}

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
    return (
        <h2 className={cn("mb-12 text-center font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl", className)} {...props}>
            <span className="gradient-text">{children}</span>
        </h2>
    )
}
