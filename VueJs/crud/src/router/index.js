// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import AdminPage from "../views/admin/AdminPage.vue";
import CreateProduct from "../views/admin/Products/CreateProduct.vue";
import GetProducts from "../views/admin/Products/GetProducts.vue";
import EditProduct from "../views/admin/Products/EditProduct.vue";
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
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    children: [
      {
        path: "products/create", 
        name: "CreateProduct",
        component: CreateProduct,
      },
      {
        path: "products/get", 
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
