export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              A Neighborhood Tradition
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Brooklyn Stoop Sale has been a beloved tradition in Carroll
              Gardens for over a decade. Every spring, the community comes
              together to showcase their unique wares, share stories, and
              connect with neighbors and visitors alike. From vintage finds to
              handmade crafts, the stoop sale offers a one-of-a-kind shopping
              experience that celebrates the rich history and vibrant culture of
              this historic neighborhood.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-bold md:ml-20">Discover Local Treasures</h3>
            <p className="text-muted-foreground md:ml-20">
              The Brooklyn Stoop Sale is a unique opportunity to connect with
              the vibrant community of Carroll Gardens. Browse the stalls of
              local vendors, artisans, and community members as they showcase
              their handmade goods, vintage finds, and one-of-a-kind items. It's
              a chance to support small businesses, discover hidden gems, and
              immerse yourself in the rich cultural tapestry of this beloved
              neighborhood.
            </p>
          </div>
          <video controls autoPlay loop className="w-full">
            <source src="about/about.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
