import { Link } from "wouter";
import AboutSection from "../components/About/AboutSection";
import EventDetailsSection from "../components/About/EventDetailsSection";

export default function Component() {
  return (
    <>
      <AboutSection />
      <EventDetailsSection />
      <div className="flex justify-center my-8">
        <Link
          href="/"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
