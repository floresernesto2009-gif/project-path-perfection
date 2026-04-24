import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Help — Companion Connect" },
      { name: "description", content: "Get in touch with our friendly support team. We're here to help by phone, email, or message." },
      { property: "og:title", content: "Contact Companion Connect" },
      { property: "og:description", content: "Reach out by phone, email, or web form. We respond quickly and kindly." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-sunrise">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h1 className="text-5xl md:text-6xl">We're here for you</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            Send us a message, give us a call, or send an email — whichever feels easiest.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-3 lg:px-8">
        <aside className="space-y-5 lg:col-span-1">
          {[
            { icon: Phone, title: "Call us", text: "1-800-555-0199", sub: "Every day, 8am – 10pm" },
            { icon: Mail, title: "Email us", text: "hello@companionconnect.org", sub: "We reply within 1 business day" },
            { icon: MapPin, title: "Visit us", text: "120 Rosewood Lane", sub: "Springfield, MA 01103" },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-warm text-warm-foreground shadow-soft">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl">{c.title}</h3>
              <p className="mt-1 text-lg font-bold text-primary">{c.text}</p>
              <p className="text-base text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </aside>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft lg:col-span-2 lg:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-16 w-16 text-primary" />
              <h2 className="mt-4 text-3xl">Message sent!</h2>
              <p className="mt-3 max-w-md text-lg text-muted-foreground">
                Thank you for reaching out. A friendly team member will get back to you very soon.
              </p>
              <Button onClick={() => setSent(false)} variant="outline" size="lg" className="mt-6">
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              <h2 className="text-3xl">Send us a message</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">Your name</Label>
                  <Input id="name" required className="h-12 text-base" placeholder="Margaret S." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email address</Label>
                  <Input id="email" type="email" required className="h-12 text-base" placeholder="margaret@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic" className="text-base font-semibold">What's it about?</Label>
                <Input id="topic" className="h-12 text-base" placeholder="A question about events" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                <Textarea id="message" required rows={6} className="text-base" placeholder="Tell us how we can help..." />
              </div>
              <Button type="submit" variant="warm" size="xl" className="w-full md:w-auto">
                Send message
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
