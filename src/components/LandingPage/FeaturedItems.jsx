export default function FeaturedItems() {
  const featuredItems = [
    {
      imgSrc: "landing-page/vintage-typewriter.png",
      imgAlt: "Vintage Typewriter",
      title: "Vintage Typewriter",
      description: "Fully restored 1950s typewriter in pristine condition.",
    },
    {
      imgSrc: "landing-page/handmade-ceramic-vase.png",
      imgAlt: "Handmade Ceramic Vase",
      title: "Handmade Ceramic Vase",
      description: "Unique, one-of-a-kind vase crafted by a local artist.",
    },
    {
      imgSrc: "landing-page/vintage-record-player.png",
      imgAlt: "Vintage Record Player",
      title: "Vintage Record Player",
      description:
        "Fully functional 1970s record player in excellent condition.",
    },
    {
      imgSrc: "landing-page/macrame-wall-hanging.png",
      imgAlt: "Handmade Macrame Wall Hanging",
      title: "Handmade Macrame Wall Hanging",
      description:
        "Beautifully crafted macrame wall hanging by a local artisan.",
    },
  ];

  return (
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
              Browse our curated selection of vintage furniture, local artwork,
              and one-of-a-kind collectibles. You never know what hidden
              treasures you might find!
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <div className="flex flex-col items-start space-y-2">
              <img
                src={item.imgSrc}
                width="300"
                height="200"
                alt="Item 1"
                className="aspect-[3/2] w-full overflow-hidden rounded-xl object-cover"
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
