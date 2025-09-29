// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import WeatherPage from "../pages/WeatherPage.vue";
const routes = [
  {
    path: "/",
    name: "Weather",
    component: WeatherPage,
  },
];

const router = createRouter({
  history: createWebHistory(), // Use history mode for cleaner URLs
  routes,
});

export default router;
