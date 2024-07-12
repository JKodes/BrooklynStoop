import { useEffect, useState } from "react";

export default function EventDetailsSection() {
  const [daysRemaining, setDaysRemaining] = useState(calculateDaysRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysRemaining(calculateDaysRemaining());
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  function calculateDaysRemaining() {
    const eventStartDate = new Date("2024-07-20T09:00:00");
    const now = new Date();
    const difference = eventStartDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Event Details
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Join Us for the Brooklyn Stoop Sale
            </h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-6 w-6" />
                <p>
                  July 20th, 2024 - July 27th, 2024{" "}
                  <span className="font-bold">
                    ({daysRemaining} days remaining)
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-6 w-6" />
                <p>9:00 AM - 5:00 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-6 w-6" />
                <p>
                  Corner of Court Street and 2nd Avenue, Carroll Gardens,
                  Brooklyn
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Carroll Gardens
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Carroll Gardens is a vibrant and historic neighborhood in
              Brooklyn, known for its tree-lined streets, charming brownstones,
              and tight-knit community. With a rich Italian-American heritage,
              the neighborhood is home to beloved local businesses, family-owned
              restaurants, and a thriving arts scene. The Brooklyn Stoop Sale is
              a celebration of the unique character and community spirit that
              makes Carroll Gardens such a special place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
