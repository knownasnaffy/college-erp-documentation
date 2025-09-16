import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BBSBEC ERP DOCS",
  description: "Documentation for the internal ERP suite used by BBSBEC",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "Professor Docs", link: "/professor/introduction" },
      // { text: "Department Clerk Docs", link: "/dep-clerk" },
    ],

    sidebar: [
      {
        text: "Common",
        items: [{ text: "Login", link: "/common/login" }],
      },
      {
        text: "Professor",
        link: "/professor/introduction",
        items: [{ text: "Hello", items: [{ text: "World" }] }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/knownasnaffy/college-erp-documentation",
      },
    ],
  },
});
