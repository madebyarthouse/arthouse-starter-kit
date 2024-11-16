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
    <div className="items-left prose mx-auto ml-5 flex h-screen flex-col justify-center gap-5">
      <header>
        <h1 className="my-2 text-5xl font-medium uppercase">
          Arthouse <span className="text-base">Starter-Kit</span>
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
      <main className="flex max-w-md flex-col gap-2 text-sm">
        <p className="my-0">
          <a href="https://github.com/madebyarthouse/arthouse-starter-kit">
            View on Github
          </a>
        </p>
        <p className="my-0 max-w-sm text-sm">
          Typescript, React, Remix, Tailwind, pnpm, Plausible, Prettier, ESLint,
          Plausible, clsx, pretty-cache-header.
        </p>
      </main>
    </div>
  );
}
