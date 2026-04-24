import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up / Login — Companion Connect" },
      { name: "description", content: "Create your free Companion Connect account in minutes — large text, easy steps, and caregiver-assisted sign-up available." },
      { property: "og:title", content: "Join Companion Connect" },
      { property: "og:description", content: "It's free, friendly, and takes only a couple of minutes." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [done, setDone] = useState(false);

  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary shadow-soft">
          <Heart className="h-4 w-4" fill="currentColor" /> Welcome
        </span>
        <h1 className="mt-5 text-5xl md:text-6xl">Join the Companion Connect family</h1>
        <p className="mt-5 text-xl text-muted-foreground">
          It takes about 2 minutes. We made it big, simple, and stress-free — and a caregiver
          can help you set up if you'd like.
        </p>
        <ul className="mt-8 space-y-4 text-lg">
          {["Free forever for personal use", "Big buttons & easy reading", "Cancel anytime, your data is yours"].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[2rem] border border-border bg-card p-8 shadow-warm md:p-10">
        <div className="flex gap-2 rounded-full bg-secondary p-1">
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-full py-3 text-base font-bold transition-smooth ${mode === "signup" ? "bg-card shadow-soft text-foreground" : "text-foreground/70"}`}
          >
            Sign up
          </button>
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex-1 rounded-full py-3 text-base font-bold transition-smooth ${mode === "login" ? "bg-card shadow-soft text-foreground" : "text-foreground/70"}`}
          >
            Log in
          </button>
        </div>

        {done ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
            <h2 className="mt-4 text-3xl">Welcome aboard!</h2>
            <p className="mt-3 text-lg text-muted-foreground">A confirmation email is on its way.</p>
            <Button asChild variant="warm" size="lg" className="mt-6">
              <Link to="/events">Browse events</Link>
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mt-8 space-y-5"
          >
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">Your name</Label>
                <Input id="name" required className="h-14 text-lg" placeholder="Margaret S." />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">Email address</Label>
              <Input id="email" type="email" required className="h-14 text-lg" placeholder="you@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-semibold">Password</Label>
              <Input id="password" type="password" required minLength={6} className="h-14 text-lg" placeholder="At least 6 characters" />
            </div>

            <Button type="submit" variant="warm" size="xl" className="w-full">
              {mode === "signup" ? "Create my account" : "Log in"}
            </Button>

            <p className="text-center text-base text-muted-foreground">
              {mode === "signup" ? (
                <>Already have an account?{" "}
                  <button type="button" onClick={() => setMode("login")} className="font-bold text-primary hover:underline">Log in</button>
                </>
              ) : (
                <>New here?{" "}
                  <button type="button" onClick={() => setMode("signup")} className="font-bold text-primary hover:underline">Create an account</button>
                </>
              )}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
