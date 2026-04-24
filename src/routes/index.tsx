import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MessageCircle, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-companions.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Companion Connect — Connection & Care for Older Adults" },
      {
        name: "description",
        content:
          "Join a warm community designed for ages 60+. Find friendly events, message loved ones, and access mental health support — all in one easy place.",
      },
      { property: "og:title", content: "Companion Connect — Connection & Care for Older Adults" },
      {
        property: "og:description",
        content:
          "A warm, simple platform helping older adults stay connected, active, and supported.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-sunrise">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary shadow-soft">
              <Sparkles className="h-4 w-4" /> A friendlier way to stay connected
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
              You're never alone with{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">Companion Connect</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl text-muted-foreground md:text-2xl">
              Real friendships, joyful events, and caring support — built simply, for adults 60 and over.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="xl" variant="warm">
                <Link to="/signup">
                  Join free today <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/features">See how it works</Link>
              </Button>
            </div>
            <p className="mt-5 text-base text-muted-foreground">
              Easy sign‑up • Large text & buttons • Free to join
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-warm opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="Older adults laughing together at a community gathering"
              width={1536}
              height={1024}
              className="rounded-[2rem] shadow-warm"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
        <h2 className="text-4xl md:text-5xl">Bringing warmth back to every day</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
          Loneliness shouldn't be part of getting older. Companion Connect helps you find friends,
          fill your calendar with things you love, and reach trusted support whenever you need it.
        </p>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Calendar,
              title: "Joyful Events",
              text: "Bingo nights, garden walks, book clubs and more. RSVP in just two taps.",
              link: "/events",
              cta: "Browse events",
            },
            {
              icon: MessageCircle,
              title: "Easy Messaging",
              text: "Big buttons, simple chats, and clear video calls with family and friends.",
              link: "/features",
              cta: "See features",
            },
            {
              icon: HeartHandshake,
              title: "Caring Support",
              text: "Schedule check‑ins with mental health professionals and explore wellbeing tips.",
              link: "/resources",
              cta: "View resources",
            },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.link as "/events" | "/features" | "/resources"}
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-warm-foreground shadow-soft">
                <c.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-2xl">{c.title}</h3>
              <p className="mt-3 text-lg text-muted-foreground">{c.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-base font-bold text-primary">
                {c.cta} <ArrowRight className="h-5 w-5 transition-smooth group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured events strip */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl">This week's gatherings</h2>
              <p className="mt-3 text-lg text-muted-foreground">A few favorites the community is loving.</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/events">See all events</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FEATURED.map((e) => (
              <article key={e.title} className="overflow-hidden rounded-3xl bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm">
                <img src={e.img} alt={e.title} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">{e.day}</span>
                  <h3 className="mt-2 text-2xl">{e.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{e.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl">From our community</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <blockquote className="text-lg leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 text-base font-bold text-primary">— {t.name}, {t.age}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-hero p-10 text-center shadow-warm md:p-16">
          <h2 className="text-4xl text-warm-foreground md:text-5xl">Ready to feel connected again?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-warm-foreground/90">
            It takes less than two minutes — and a friendly face is waiting on the other side.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="xl" variant="default">
              <Link to="/signup">Create your free account</Link>
            </Button>
            <Button asChild size="xl" variant="soft">
              <Link to="/contact">Talk to a person</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import bingoImg from "@/assets/event-bingo.jpg";
import walkImg from "@/assets/event-walk.jpg";
import bookImg from "@/assets/event-book.jpg";

const FEATURED = [
  { title: "Friday Bingo Night", day: "Fri • 7:00 PM", text: "Laughs, prizes, and great company at our weekly favorite.", img: bingoImg },
  { title: "Sunset Garden Walk", day: "Sat • 5:30 PM", text: "A gentle stroll through the rose gardens with neighbors.", img: walkImg },
  { title: "Tuesday Book Club", day: "Tue • 10:00 AM", text: "This month: 'A Gentleman in Moscow'. Tea provided!", img: bookImg },
];

const TESTIMONIALS = [
  { name: "Margaret", age: 72, quote: "I made three new friends in my first month. Bingo night is now my favorite night of the week." },
  { name: "Henry", age: 68, quote: "The video calls are so simple. I see my granddaughter every Sunday now." },
  { name: "Dorothy", age: 81, quote: "The wellness check-ins gave me back peace of mind. I felt heard." },
];
