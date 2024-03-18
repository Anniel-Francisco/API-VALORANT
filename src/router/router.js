import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("/src/pages/Home.vue"),
  },
  {
    path: "/agents",
    name: "Agents",
    component: () => import("/src/pages/Agents.vue"),
  },
  {
    path: "/weapons",
    name: "Weapons",
    component: () => import("/src/pages/Weapons.vue"),
  },
  {
    path: "/maps",
    name: "Maps",
    component: () => import("/src/pages/Maps.vue"),
  },
  {
    path: "/gamemodes",
    name: "GameModes",
    component: () => import("/src/pages/GameModes.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
