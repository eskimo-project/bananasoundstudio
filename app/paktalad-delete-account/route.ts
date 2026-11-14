import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const htmlPath = path.join(
    process.cwd(),
    "public",
    "paktalad-delete-account",
    "index.html",
  );
  const html = await readFile(htmlPath, "utf8");

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
