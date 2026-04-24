import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Phone, CalendarCheck, HeartPulse, LifeBuoy, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Companion Connect" },
      { name: "description", content: "Mental health support, wellbeing articles, and easy ways to schedule check-ins with caring professionals." },
      { property: "og:title", content: "Mental health & wellbeing resources" },
      { property: "og:description", content: "Trusted articles, helplines, and check-ins designed for older adults." },
    ],
  }),
  component: ResourcesPage,
});

const ARTICLES = [
  { icon: Sun, title: "Five small ways to brighten your morning", text: "Tiny rituals that can lift your mood before breakfast." },
  { icon: HeartPulse, title: "Gentle exercises you can do at home", text: "Safe, simple movements to keep your body feeling its best." },
  { icon: BookOpen, title: "How to ask for help — and why it's brave", text: "A kind guide to reaching out, with words to use." },
  { icon: LifeBuoy, title: "Coping with grief and big changes", text: "What to expect, and how community can help." },
];

function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-sunrise">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h1 className="text-5xl md:text-6xl">Care that meets you where you are</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            Whether you need a listening ear, a helpful article, or someone to talk to today — we're here.
          </p>
        </div>
      </section>

      {/* Quick support */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-warm p-10 text-warm-foreground shadow-warm">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-foreground/15">
              <CalendarCheck className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-3xl text-warm-foreground">Schedule a check-in</h2>
            <p className="mt-3 text-lg text-warm-foreground/90">
              Book a 30-minute call with a licensed mental health professional. Free for members.
            </p>
            <Button asChild size="lg" variant="default" className="mt-6">
              <Link to="/contact">Request a check-in</Link>
            </Button>
          </div>

          <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-warm-foreground shadow-soft">
              <Phone className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-3xl">Talk to someone now</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Our friendly support line is open every day, 8am–10pm.
            </p>
            <a href="tel:+18005550199" className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-lg font-bold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5">
              <Phone className="h-5 w-5" /> Call 1-800-555-0199
            </a>
          </div>
        </div>

        {/* Articles */}
        <div className="mt-16">
          <h2 className="text-4xl md:text-5xl">Wellbeing reads</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ARTICLES.map((a) => (
              <article key={a.title} className="flex gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/40 text-primary">
                  <a.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl">{a.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Crisis */}
        <div className="mt-16 rounded-3xl border-2 border-primary/30 bg-secondary p-8 text-center md:p-10">
          <h3 className="text-2xl">In crisis or need urgent help?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            If you or someone you love is in immediate danger, please call your local emergency number,
            or in the US dial <strong>988</strong> for the Suicide & Crisis Lifeline.
          </p>
        </div>
      </section>
    </>
  );
}
