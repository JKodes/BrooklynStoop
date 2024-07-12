export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We'd love to hear from you! Whether you have a question about the
            sale, items, location, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row md:justify-center md:space-x-8">
          <div className="flex flex-col items-center space-y-4 md:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
            ></textarea>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Send Message
            </button>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0 md:w-1/2">
            <h3 className="text-lg font-bold">Our Location</h3>
            <p className="mt-2 text-muted-foreground">
              Carrol Gardens,
              <br />
              In the corner of Court Street and 2nd Ave
            </p>
            <iframe
              className="mt-4 w-full h-64 rounded-md border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.982893210577!2d-73.9951469845932!3d40.6808789793359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1912b9be47%3A0xf7a32f5e6b24f6df!2sCarroll%20Gardens%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1634215017355!5m2!1sen!2sus"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
