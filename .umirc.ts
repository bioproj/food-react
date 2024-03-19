import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home/index" },
    { path: "/recipes", component: "recipes/index" },
    { path: "/message", component: "message/index" },
    { path: "/me", component: "me/index" },
    { path: "/todayAnalysis", component: "todayAnalysis/index" },
    { path: "/myfood", component: "myfood/index" },
    { path: "/healthRecord", component: "healthRecord/index" },
  ],
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  history: { type: 'hash' },
  targets: { chrome: 67 },
  jsMinifier: 'terser',
  cssMinifier: 'cssnano',
  npmClient: 'pnpm',
});
