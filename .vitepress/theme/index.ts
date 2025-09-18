import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import "./custom.css";

import { YouTubeEmbed } from "@miletorix/vitepress-youtube-embed";
import "@miletorix/vitepress-youtube-embed/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    const { app } = ctx;
    enhanceAppWithTabs(app);
    ctx.app.component("YouTubeEmbed", YouTubeEmbed);
  },
} satisfies Theme;
