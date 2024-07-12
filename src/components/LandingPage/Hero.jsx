import { Link } from "wouter";

export default function Hero() {
  return (
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
                Carrol Gardens, featuring a curated selection of vintage finds,
                local artisan goods, and neighborhood treasures.
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
            src="landing-page/flea_market.jpeg"
            width="550"
            height="550"
            alt="Stoop Sale"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
