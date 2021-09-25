import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// import auth from "@/router/middleware/auth";
 import store from "@/store";
//console.log(store.state.auth.isAuth);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { requiredAuth: true}
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
 if (to.matched.some(record => record.meta.requiredAuth)) {
   if (!store.state.auth.isAuth) {
     next({
       name: "/",
     });
   } else {
     next();
   }
 } else {
   next();
 }
});

export default router;
