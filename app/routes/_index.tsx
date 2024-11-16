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
      <div className="prose mx-4 h-fit max-w-fit gap-5 space-y-4 rounded-lg bg-white/80 p-5 md:prose-xl sm:mx-auto md:p-10">
        <header>
          <div className="flex flex-row flex-wrap items-end gap-5">
            <h1 className="!m-0 text-4xl font-medium uppercase md:text-7xl">
              Arthouse{" "}
            </h1>
            <div className="mb-1.5 inline-flex flex-col gap-0 text-lg font-medium uppercase leading-none">
              <span>Full-Stack</span>
              <span>Starter-Kit</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 leading-5">
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
          <p className="!my-0 text-base">
            Typescript, React, Remix, Tailwind, pnpm, Plausible, Prettier,
            ESLint, clsx, pretty-cache-header.
          </p>
        </main>
      </div>
    </div>
  );
}
