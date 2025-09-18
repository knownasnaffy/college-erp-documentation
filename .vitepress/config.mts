import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BBSBEC ERP DOCS",
  description: "Documentation for the internal ERP suite used by BBSBEC",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "Professor Docs", link: "/professor/introduction" },
      { text: "Overview", link: "/overview" },
    ],

    sidebar: [
      {
        text: "Common",
        items: [
          { text: "Login", link: "/common/login" },
          { text: "Contact", link: "/contact" },
        ],
      },
      {
        text: "Professor",
        items: [
          {
            text: "Schedule",
            link: "/professor/schedule",
          },
          {
            text: "Proctor Duty",
            link: "/professor/proctor-duty",
          },
        ],
      },
      {
        text: "Department Clerk",
        items: [
          {
            text: "Class & Mentor Groups",
            link: "/dep-clerk/class-n-mentor-groups",
          },
          { text: "Course Coordinator", link: "/dep-clerk/course-coordinator" },
          { text: "Proctor Assignment", link: "/dep-clerk/proctor-assignment" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/knownasnaffy/college-erp-documentation",
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true,
    },
  },
});
