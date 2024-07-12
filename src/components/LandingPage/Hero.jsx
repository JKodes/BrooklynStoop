import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="w-full py-8 md:py-20">
      <div className="px-8 md:px-16">
        <div className="flex flex-col-reverse justify-center gap-20">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Carrol Gardens Stoop Sale
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Join us for a vibrant, eclectic stoop sale in the heart of
                Carrol Gardens, featuring a curated selection of vintage finds,
                local artisan goods, and neighborhood treasures.
              </p>
              <Link
                href="/stoop-sale"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Explore the Sale
              </Link>
            </div>
          </div>
          <img
            src="landing-page/flea_market.jpeg"
            alt="Stoop Sale"
            className="mx-auto w-full h-96 bg-center aspect-video overflow-hidden rounded-xl object-cover lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
