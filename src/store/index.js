import Vue from "vue";
import Vuex from "vuex";
import ingredient from "./ingredient/ingredient";
import recipe from "./recipe/recipe";
import user from "./user/user";

Vue.use(Vuex);

 const store=new Vuex.Store({
  modules:{
    ingredient,
    recipe,
    user
  }
});

export default store;