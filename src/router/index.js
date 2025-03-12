import { createRouter, createWebHistory } from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Shop from "@/pages/Shop.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import Cart from "@/pages/Cart.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/shop", component: Shop },
  { path: "/product/details/:id", component: ProductDetails, props: true },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
