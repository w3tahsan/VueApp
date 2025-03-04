import { createMemoryHistory, createRouter } from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Shop from "@/pages/Shop.vue";
import ProductDetails from "@/pages/ProductDetails.vue";


const routes = [
  { path: "/", component: Homepage },
  { path: "/shop", component: Shop },
  { path: "/product/details", component: ProductDetails },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
