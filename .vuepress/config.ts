import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { themeConfig } from './config/index'

export default defineUserConfig({
  title: "BeYourself",
  description: "Be yourself, Keep learning, then you can catch up with knowledge",
  bundler: viteBundler(),
  dest: "dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: recoTheme(themeConfig),
});
