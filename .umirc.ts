import { defineConfig } from "umi";
import { initPath } from './src/config';

export default defineConfig({
  routes: [
    { path: '/*', component: '404' },
    { path: '/', redirect: initPath },
    { path: "/welcome", component: "welcome" },

    { path: "/home", component: "home" },
    { path: "/brandAgency", component: "brandAgency" },
    { path: "/selectSchool", component: "selectSchool" },
    { path: "/selectSchool/details/:id", component: "selectSchool/Details" },
    { path: "/intelligence", component: "intelligence" },
  ],
  npmClient: 'yarn',
  hash: true,
});
