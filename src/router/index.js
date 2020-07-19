import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import InvoerPagina from "../views/InvoerPagina.vue";

Vue.use(VueRouter);

//linkExactActiveClass= "activeLink"; //dit kan je als vaste styling gebruiken voor active classes
export default new VueRouter({
  linkExactActiveClass : "activeLink",
  routes : [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/InvoerPagina",
    name:"InvoerPagina",
    component: () => import(/* webpackChunkName: "InvoerPagina" */  "../views/InvoerPagina.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  

]
});

// const router = new VueRouter({
//   routes
// });

//export default router;