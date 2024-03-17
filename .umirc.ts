import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home/index" },
    { path: "/recipes", component: "recipes/index" },
    { path: "/message", component: "message/index" },
    { path: "/me", component: "me/index" },
    { path: "/todayAnalysis", component: "todayAnalysis/index" },
  ],
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  history: { type: 'hash' },

  npmClient: 'pnpm',
});
