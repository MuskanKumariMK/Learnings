// src/router/index.js
import App from "@/App.vue";
import Bind from "@/components/Bind.vue";
import VIf from "@/components/VIf.vue";
import Learning from "@/view/Learning.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/bind",
    name: "Bind",
    component: Bind,
  },
  {
    path: "/vif",
    name: "V-If",
    component: Learning,
  },
  {
    path: "/learning",
    name: "Learningf",
    component: Learning,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
