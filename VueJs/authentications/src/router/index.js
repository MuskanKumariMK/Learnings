// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import AdminPage from "../views/admin/AdminPage.vue";
import CreateProduct from "../views/admin/Products/CreateProduct.vue";
import GetProducts from "../views/admin/Products/GetProducts.vue";
import EditProduct from "../views/admin/Products/EditProduct.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    children: [
      {
        path: "products/create", // ✅ No leading slash
        name: "CreateProduct",
        component: CreateProduct,
      },
      {
        path: "products/get", // ✅ No leading slash
        name: "GetProducts",
        component: GetProducts,
      },
      {
        path: "products/edit/:id",
        name: "EditProduct",
        component: EditProduct,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(), // Use history mode for cleaner URLs
  routes,
});

export default router;
