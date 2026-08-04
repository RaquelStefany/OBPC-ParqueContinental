import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { getVerseOfTheDay } from "./api/_verse-service.js";

function localVerseApi(appKey) {
  return {
    name: "local-verse-of-day-api",
    configureServer(server) {
      server.middlewares.use("/api/verse-of-day", async (request, response) => {
        if (request.method !== "GET") {
          response.statusCode = 405;
          response.setHeader("Allow", "GET");
          response.end(JSON.stringify({ error: "Método não permitido" }));
          return;
        }
        const verse = await getVerseOfTheDay(appKey);
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json; charset=utf-8");
        response.setHeader("Cache-Control", "no-store");
        response.end(JSON.stringify(verse));
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), localVerseApi(env.YVP_APP_KEY)],
  };
});
