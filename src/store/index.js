import Vue from "vue";
import Vuex from "vuex";
import ingredient from "./ingredient/ingredient";
import recipe from "./recipe/recipe";
import user from "./user/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    ingredient,
    recipe,
    user
  }
});
