import { createWebHistory, createRouter } from "vue-router";
import People from "@/views/People.vue";
import Countries from "@/views/Countries.vue";

const routes = [
  {
    path: "/",
    name: "People",
    component: People,
  },
  {
    path: "/about",
    name: "Countries",
    component: Countries,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
