import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/user-mangement/signin.vue";
import SignUp from "../views/user-mangement/signup.vue";
import Recipe from "../views/recipe/list-recipe/list-recipe.vue";
import IngredientList from "../views/shopping-list/ingredient-list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/recipe",
    name: "recipe",
    component:Recipe,
    beforeEnter(to, from, next) {
      var isAuthenticatedTemp= localStorage.getItem("isAuthenticated");
      var isAuthenticated=isAuthenticatedTemp=="true";
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "signin" });
      }
    },
  },
  {
    path: "/shopping-list",
    name: "shopping-list",
    component:IngredientList ,
    beforeEnter(to, from, next) {
      var isAuthenticatedTemp=localStorage.getItem("isAuthenticated");
      var isAuthenticated=isAuthenticatedTemp=="true";

      if (isAuthenticated) {

        next();
      } else {
        next({ name: "signin" });
      }
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
