import { HeadersFunction, type MetaFunction } from "@remix-run/node";
import { cacheHeader } from "pretty-cache-header";

export const meta: MetaFunction = () => {
  return [
    { title: "Change me" },
    { name: "description", content: "Change me" },
  ];
};

export async function loader() {
  return {
    message: "Hello World",
    cachedAt: new Date().toISOString(),
  };
}

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": cacheHeader({
      maxAge: "5s",
      sMaxage: "30s",
      staleWhileRevalidate: "1min",
    }),
  };
};

export default function Index() {
  return (
    <div
      style={{
        backgroundColor: "#e5e5f7",
        opacity: 0.8,
        backgroundSize: "10px 10px",
        backgroundImage: "radial-gradient(#161717 0.5px, #e5e5f7 0.5px)",
      }}
      className="flex h-screen items-center justify-center"
    >
      <div className="prose prose-xl mx-4 h-fit max-w-fit gap-5 space-y-4 rounded-lg bg-white/80 p-10 sm:mx-auto">
        <header>
          <h1 className="my-2 text-7xl font-medium uppercase">
            Arthouse <span className="text-2xl">Starter-Kit</span>
          </h1>
          <div className="flex items-center gap-2">
            by
            <a href="https://chrcit.com?utm_source=arthouse-template">
              Christian Cito
            </a>{" "}
            /{" "}
            <a href="https://madebyarthouse.com?utm_source=arthouse-template">
              Arthouse
            </a>
          </div>
        </header>

        <hr className="my-4" />
        <main className="flex max-w-xl flex-col gap-2">
          <p className="my-0">
            <a href="https://github.com/madebyarthouse/arthouse-starter-kit">
              View on Github
            </a>
          </p>
          <p className="my-0 text-base">
            Typescript, React, Remix, Tailwind, pnpm, Plausible, Prettier,
            ESLint, Plausible, clsx, pretty-cache-header.
          </p>
        </main>
      </div>
    </div>
  );
}
