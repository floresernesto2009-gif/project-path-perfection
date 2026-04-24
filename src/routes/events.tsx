import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MapPin, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import bingoImg from "@/assets/event-bingo.jpg";
import walkImg from "@/assets/event-walk.jpg";
import bookImg from "@/assets/event-book.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Companion Connect" },
      { name: "description", content: "Browse upcoming events for older adults: bingo nights, garden walks, book clubs and more. RSVP in one tap." },
      { property: "og:title", content: "Upcoming events for older adults" },
      { property: "og:description", content: "Find your next gathering — friendly, accessible, and easy to RSVP to." },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  { id: "bingo", title: "Friday Bingo Night", date: "Fri, May 3", time: "7:00 PM", place: "Rosewood Community Hall", img: bingoImg, text: "Our weekly favorite — prizes, snacks, and lots of laughs.", category: "Social" },
  { id: "walk", title: "Sunset Garden Walk", date: "Sat, May 4", time: "5:30 PM", place: "Maple Park East Gate", img: walkImg, text: "A gentle 30-minute stroll. Benches and rest stops along the way.", category: "Wellness" },
  { id: "book", title: "Tuesday Book Club", date: "Tue, May 7", time: "10:00 AM", place: "Companion Café", img: bookImg, text: "This month: 'A Gentleman in Moscow' by Amor Towles.", category: "Learning" },
  { id: "tea", title: "Morning Tea & Chat", date: "Wed, May 8", time: "9:30 AM", place: "Online (video call)", img: bingoImg, text: "Cozy small-group conversation from the comfort of home.", category: "Online" },
  { id: "music", title: "Live Music Afternoon", date: "Thu, May 9", time: "2:00 PM", place: "Lakeside Pavilion", img: walkImg, text: "Classic favorites performed live. Sing-along welcome!", category: "Social" },
  { id: "art", title: "Watercolor Workshop", date: "Sat, May 11", time: "11:00 AM", place: "Companion Café", img: bookImg, text: "All materials provided. No experience needed — just bring a smile.", category: "Learning" },
];

const CATEGORIES = ["All", "Social", "Wellness", "Learning", "Online"] as const;

function EventsPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [rsvped, setRsvped] = useState<Set<string>>(new Set());

  const visible = filter === "All" ? EVENTS : EVENTS.filter((e) => e.category === filter);

  const toggleRsvp = (id: string) => {
    setRsvped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <section className="bg-gradient-sunrise">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h1 className="text-5xl md:text-6xl">Find your next gathering</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            From bingo to book clubs — pick what sounds fun and tap RSVP. We'll send a friendly reminder.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter events">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-3 text-base font-bold transition-smooth ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-foreground hover:bg-secondary/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((e) => {
            const isRsvped = rsvped.has(e.id);
            return (
              <article key={e.id} className="overflow-hidden rounded-3xl bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm">
                <img src={e.img} alt={e.title} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">{e.category}</span>
                  <h3 className="mt-2 text-2xl">{e.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground">{e.text}</p>
                  <ul className="mt-4 space-y-2 text-base">
                    <li className="flex items-center gap-2 text-foreground/80"><Calendar className="h-5 w-5 text-primary" /> {e.date}</li>
                    <li className="flex items-center gap-2 text-foreground/80"><Clock className="h-5 w-5 text-primary" /> {e.time}</li>
                    <li className="flex items-center gap-2 text-foreground/80"><MapPin className="h-5 w-5 text-primary" /> {e.place}</li>
                  </ul>
                  <Button
                    onClick={() => toggleRsvp(e.id)}
                    variant={isRsvped ? "secondary" : "warm"}
                    size="lg"
                    className="mt-6 w-full"
                  >
                    {isRsvped ? (<><Check /> You're going!</>) : "RSVP"}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
