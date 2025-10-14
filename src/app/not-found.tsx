import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-4">
        <h1 className="font-headline text-8xl font-bold tracking-tighter gradient-text md:text-9xl">
          404
        </h1>
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          You've reached the void.
        </h2>
        <p className="max-w-md text-muted-foreground">
          Looks like you've drifted into an uncharted quadrant of the web. Let's get you back to the main universe.
        </p>
      </div>
      <Button asChild>
        <Link href="/">
          <Rocket className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </Button>
    </main>
  );
}
