import { Link } from "wouter";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Carrol Gardens Stoop Sale</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Items
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Location
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-8 md:px-16">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Carrol Gardens Stoop Sale
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join us for a vibrant, eclectic stoop sale in the heart of
                    Carrol Gardens, featuring a curated selection of vintage
                    finds, local artisan goods, and neighborhood treasures.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Explore the Sale
                  </Link>
                </div>
              </div>
              <img
                src="landing-page/free-photo-of-toys.jpeg"
                width="550"
                height="550"
                alt="Stoop Sale"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-6 md:px-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Items
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Hidden Gems
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our curated selection of vintage furniture, local
                  artwork, and one-of-a-kind collectibles. You never know what
                  hidden treasures you might find!
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-start space-y-2">
                <img
                  src="landing-page/vintage-typewriter.png"
                  width="300"
                  height="200"
                  alt="Item 1"
                  className="aspect-[3/2] w-full overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Vintage Typewriter</h3>
                <p className="text-muted-foreground">
                  Fully restored 1950s typewriter in pristine condition.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  src="landing-page/handmade-ceramic-vase.png"
                  width="300"
                  height="200"
                  alt="Item 2"
                  className="aspect-[3/2] w-full overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Handmade Ceramic Vase</h3>
                <p className="text-muted-foreground">
                  Unique, one-of-a-kind vase crafted by a local artist.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  src="landing-page/vintage-record-player.png"
                  width="300"
                  height="200"
                  alt="Item 3"
                  className="aspect-[3/2] w-full overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Vintage Record Player</h3>
                <p className="text-muted-foreground">
                  Fully functional 1970s record player in excellent condition.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <img
                  src="landing-page/macrame-wall-hanging.png"
                  width="300"
                  height="200"
                  alt="Item 4"
                  className="aspect-[3/2] w-full overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">
                  Handmade Macrame Wall Hanging
                </h3>
                <p className="text-muted-foreground">
                  Beautifully crafted macrame wall hanging by a local artisan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Carrol Gardens Stoop Sale. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
