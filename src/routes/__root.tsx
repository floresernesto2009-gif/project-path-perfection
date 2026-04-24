import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-base text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-smooth hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Companion Connect — Connection & Care for Older Adults" },
      {
        name: "description",
        content:
          "Companion Connect helps older adults beat loneliness through friendly events, easy messaging, and mental health support — designed for ages 60+.",
      },
      { name: "author", content: "Companion Connect" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Companion Connect — Connection & Care for Older Adults" },
      { name: "twitter:title", content: "Companion Connect — Connection & Care for Older Adults" },
      { name: "description", content: "Companion Connect is a warm, accessible website designed for older adults, offering information and community features." },
      { property: "og:description", content: "Companion Connect is a warm, accessible website designed for older adults, offering information and community features." },
      { name: "twitter:description", content: "Companion Connect is a warm, accessible website designed for older adults, offering information and community features." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f8b519e-0c46-4a58-9377-93cce1c0b29a/id-preview-462b2817--c2cbd629-4370-4dfe-a5ac-db4c2d03ecdf.lovable.app-1776990007653.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f8b519e-0c46-4a58-9377-93cce1c0b29a/id-preview-462b2817--c2cbd629-4370-4dfe-a5ac-db4c2d03ecdf.lovable.app-1776990007653.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Nunito:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
