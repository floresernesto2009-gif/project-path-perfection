import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, Shield, Globe } from "lucide-react";
import aboutImg from "@/assets/about-tea.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Companion Connect" },
      { name: "description", content: "Our mission is to reduce loneliness for older adults through warm community, joyful events, and accessible support." },
      { property: "og:title", content: "About Companion Connect" },
      { property: "og:description", content: "Why we built Companion Connect — and the people we built it for." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "Warmth first", text: "Every detail — from color to copy — is designed to feel like a friendly hand on your shoulder." },
  { icon: Users, title: "Real connection", text: "We focus on lasting friendships and meaningful gatherings, not fleeting interactions." },
  { icon: Shield, title: "Safe & private", text: "Your information stays yours. Strong security, simple controls, no surprises." },
  { icon: Globe, title: "For everyone", text: "Multi-language support and accessibility from day one. You belong here." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-sunrise">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h1 className="text-5xl md:text-6xl">A community built around you</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            Companion Connect was born from a simple belief: getting older should mean richer
            friendships, not fewer. We're here to help make that real, every day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <img src={aboutImg} alt="Two friends sharing tea" loading="lazy" width={1024} height={1024} className="rounded-[2rem] shadow-warm" />
        <div>
          <h2 className="text-4xl md:text-5xl">Our mission</h2>
          <p className="mt-5 text-xl text-muted-foreground">
            Reduce loneliness and isolation among older adults by combining real-world events,
            simple communication tools, and trusted mental health resources.
          </p>
          <p className="mt-4 text-xl text-muted-foreground">
            We work with caregivers, families, and mental health professionals so no one has to
            navigate the journey alone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl">What we believe</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-warm-foreground shadow-soft">
                <v.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl">{v.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
