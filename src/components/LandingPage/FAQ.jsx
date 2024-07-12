import { useState } from "react";

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-8">
          <div className="space-y-4">
            <FAQItem
              question="What is a stoop sale?"
              answer="A stoop sale is similar to a garage sale but is typically held on the stoop or steps of a building. It allows neighbors to sell unwanted items directly from their homes."
            />
            <FAQItem
              question="What is special in this stoop sale?"
              answer="It's a garage sale but better! Join us for a vibrant, eclectic stoop sale featuring a curated selection of vintage finds, local artisan goods, and neighborhood treasures."
              highlight="It's a garage sale but better!"
            />
            <FAQItem
              question="Why come to Brooklyn stoop sale?"
              answer="Experience the unique charm and community spirit of Brooklyn. Our stoop sale offers a variety of unique items and a chance to meet and connect with local residents."
            />
            <FAQItem
              question="Who are organizing the sale?"
              answer="The sale is being organized by Chelsa and Lil, dedicated residents of Carrol Gardens."
            />
            <FAQItem
              question="What kind of items can I expect?"
              answer="You can expect a range of items including vintage furniture, local artwork, handmade crafts, and other unique collectibles."
            />
            <FAQItem
              question="How can I participate?"
              answer="You can participate by either visiting the sale to find great deals or setting up your own spot to sell items. Contact us for more details on how to get involved."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, highlight }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-4">
      <h3
        className="text-lg font-semibold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </h3>
      {isOpen && (
        <p className="mt-2 text-muted-foreground">
          {highlight ? <span className="font-bold">{highlight}</span> : null}{" "}
          {answer.replace(highlight, "")}
        </p>
      )}
    </div>
  );
}
