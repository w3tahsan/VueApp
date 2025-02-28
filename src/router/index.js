import { createMemoryHistory, createRouter } from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Shop from "@/pages/Shop.vue";


const routes = [
  { path: "/", component: Homepage },
  { path: "/shop", component: Shop },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
