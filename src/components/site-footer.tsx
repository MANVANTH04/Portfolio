export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-center px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Kothuri Manvanth Sai. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
