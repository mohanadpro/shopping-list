import Vue from "vue";
import Vuex from "vuex";
import ingredient from "./ingredient/ingredient";
import recipe from "./recipe/recipe";
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    ingredient,
    recipe
  }
});
