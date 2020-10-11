import recipes from '../../data/recipes.json';

const state={
      recipes:[]
};

const getters={
      getRecipes:state=>state.recipes
}

const actions={
      fetchRecipes({commit}){
            commit('setRecipes',recipes)
      }
};

const mutations={
      setRecipes:(state,recipes)=>(state.recipes=recipes)
};

export default{
      state,
      getters,
      actions,
      mutations
}
