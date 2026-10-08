import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const routes = [
  "services",
  "solutions",
  "industries",
  "case-studies",
  "about",
  "contact",
];

const distDirectory = resolve("dist");
const appEntry = resolve(distDirectory, "index.html");

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = resolve(distDirectory, route);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(appEntry, resolve(routeDirectory, "index.html"));
  }),
);

console.log(`Generated static entry pages for ${routes.length} routes.`);
