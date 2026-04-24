import { createFileRoute, Link } from "@tanstack/react-router";
import { UserPlus, Calendar, MessageCircle, Video, Brain, Accessibility, Languages, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Companion Connect" },
      { name: "description", content: "Simple sign-up, friendly events, easy messaging and video calls, and built-in mental health support — all designed for older adults." },
      { property: "og:title", content: "Features built for older adults" },
      { property: "og:description", content: "Everything Companion Connect offers, from RSVPs to wellness check-ins." },
    ],
  }),
  component: FeaturesPage,
});

const FEATURES = [
  { icon: UserPlus, title: "Simple Sign-Up", text: "Large text, clear steps, and an option for caregivers to assist. You can be set up in minutes." },
  { icon: Calendar, title: "Events & Calendar", text: "Browse bingo nights, walks, classes and meetups. RSVP with one tap and see everything in one calendar." },
  { icon: MessageCircle, title: "Friendly Messaging", text: "Big buttons, easy-to-read chats, and gentle confirmations to prevent mistakes." },
  { icon: Video, title: "Video & Voice Calls", text: "One-tap calling. See and hear loved ones with a clear, no-fuss interface." },
  { icon: Brain, title: "Mental Health Support", text: "Schedule a check-in with a licensed professional and access vetted wellbeing articles." },
  { icon: Accessibility, title: "Accessibility First", text: "High-contrast colors, large fonts, and screen-reader friendly throughout." },
  { icon: Languages, title: "Multi-Language", text: "Available in multiple languages so everyone feels at home." },
  { icon: ShieldCheck, title: "Private & Secure", text: "Modern security with simple controls. Your data is yours." },
];

function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-sunrise">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h1 className="text-5xl md:text-6xl">Everything you need, nothing you don't</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            Every feature is designed to feel obvious — so you can focus on the people, not the buttons.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-warm-foreground shadow-soft">
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-hero p-10 text-center shadow-warm md:p-14">
          <h2 className="text-4xl text-warm-foreground md:text-5xl">Try it for yourself</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-warm-foreground/90">Free forever for personal use.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="xl" variant="default">
              <Link to="/signup">Get started</Link>
            </Button>
            <Button asChild size="xl" variant="soft">
              <Link to="/contact">Ask a question</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
