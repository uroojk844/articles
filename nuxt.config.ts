import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Articles",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/icon", "@pinia/nuxt"],
  hooks: {
    async "prerender:routes"(ctx) {
      const slugify = (text: string) =>
        text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with -
          .replace(/[^\w\-]+/g, "") // Remove all non-word chars (removes ? and ')
          .replace(/\-\-+/g, "-") // Replace multiple - with single -
          .trim();

      const response = await fetch(
        "https://mocki.io/v1/50422b19-547f-41c0-b623-e82d886ad264",
      );
      const data = await response.json();
      for (const article of data.articles) {
        if(article.title.includes("[Removed]")) continue;
        ctx.routes.add(`/article/${slugify(article.title)}`);
      }
    },
  },
});
