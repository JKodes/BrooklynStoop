import { useState } from "react";
import { Link } from "wouter";

const Items = [
  {
    name: "Women Summer Halter Neck Pleated Long Dress",
    desc: "Perfect for Cocktail/Beach party",
    imgURL: "https://m.media-amazon.com/images/I/610yVjkcU4L._AC_SY550_.jpg",
  },
  {
    name: "Supnier Women's Summer Maxi Dress",
    desc: "A casual V-neck sleeveless Bohemian spaghetti maxi dress with pockets",
    imgURL: "https://m.media-amazon.com/images/I/71TDBvtMQ6L._AC_SY550_.jpg",
  },
  {
    name: "Classic Brown Leather Boots",
    desc: "Step out in style with these classic brown leather boots! Perfect for any season, these boots feature a sleek design with a comfortable fit",
    imgURL: "https://m.media-amazon.com/images/I/71POaxCCuJL._AC_SX679_.jpg",
  },
  {
    name: "Elegant Butterfly Strappy Heel",
    desc: "Elevate your look with these stunning black strappy heels! Perfect for any occasion, these heels feature a chic and elegant design that complements both casual and formal outfits",
    imgURL: "https://m.media-amazon.com/images/I/41l7zLV9wXL._AC_SY695_.jpg",
  },
  {
    name: "Converse Women's All Star '70s High Top Sneakers",
    desc: "Go for everyday wear, these converse offer a modern design with a touch of classic appeal",
    imgURL: "https://m.media-amazon.com/images/I/6149X2wAEUL._AC_SY695_.jpg",
  },
  {
    name: "Crystal Snowflake Showpiece",
    desc: "Capture the beauty of winter with this exquisite crystal snowflake showpiece",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo96rVeRuh5jQI7AVgbup45kAdIahu6JclHg&s",
  },
  {
    name: "Boho Statement Necklace",
    desc: "Elevate your style with this boho statement necklace. Handcrafted with vibrant beads, feathers, and unique charms, this necklace is a true reflection of Bohemian spirit",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYz6F0UB_cx38RmWiSkJ62MbZ4MIBWuzqmPQ&s",
  },
  {
    name: "Charm Bracelets Set",
    desc: "Personalize your look with this set of charming bracelets. Each bracelet features a collection of meaningful charms, from hearts and stars to intricate beads and gemstones",
    imgURL:
      "https://www.cheeranddanceondemand.com/cdn/shop/files/cheerleading_bracelet_set_d040d829-e261-4d38-9bba-211e1c290011_1445x.jpg?v=1641408991",
  },
  {
    name: "Vintage Wooden Jewelry Box",
    desc: "Store your precious treasures in style with this elegant vintage wooden jewelry box",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-gfYZOhuIJH9mWxBJyScYsBEQD9KGg0JJg&s",
  },
  {
    name: "Vintage Brass Desk Lamp",
    desc: "Illuminate your space with vintage charm using this elegant brass desk lamp.",
    imgURL:
      "https://img.freepik.com/free-photo/dark-style-lamp-indoors_23-2151105924.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712016000&semt=ais",
  },
  {
    name: "Modern Leather Crossbody Bag by Urban Chic",
    desc: "Enhance your everyday style with this sleek leather crossbody bag by Urban Chic.",
    imgURL:
      "https://tergusco.com/cdn/shop/files/DSCF7067.jpg?v=1698372338&width=713",
  },
  {
    name: "Elegant Porcelain Devon Figurine",
    desc: "Add a touch of elegance to your home with this beautiful porcelain Devon figurine.",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKKUo9Kd7OUXuSDKvU0RKGqKb5OXzG4nyzg&s",
  },
  {
    name: "Special Hardcover Edition: 'The Great Gatsby' by F. Scott Fitzgerald",
    desc: "Own a piece of this beautifully bound hardcover edition features gold-embossed lettering and intricate illustrations.",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVtIDEEyDwPb3tsqYOxFegqcXSeTbXkWTiA&s",
  },
  {
    name: "Exquisite Ceramic Turkish Cup Set",
    desc: "Experience the beauty and tradition of Turkish tea with this exquisite ceramic cup set.",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuI2y_0kf7XrmP9JNwvPDw-Drhu15eO-d2AQ&s",
  },
  {
    name: "Professional Silver-Plated Flute by MelodyMaster",
    desc: "Discover the joy of music with this professional silver-plated flute by MelodyMaster.",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHSUrTuIfiRBOGJT3Mu1Ogiy4Peuy7rME_A&s",
  },
];

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = Items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="text-lg font-semibold">Brooklyn Stoop Sale</span>
          </Link>
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
              <SearchIcon className="w-4 h-4" />
            </div>
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-muted-foreground rounded-md py-2 pl-10 pr-4 text-muted-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
            />
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src={item.imgURL}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold md:text-xl">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="bg-primary p-6 text-center">
        <h2 className="text-2xl font-semibold">Come to the Stoop Sale!</h2>
        <p className="mt-2 text-sm">
          More surprises await you! Join us for exciting finds coming soon.
        </p>
        <div className="mt-4">
          <Link href="/" className="bg-muted rounded-md px-4 py-2">
            Back to Home
          </Link>
        </div>
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

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
