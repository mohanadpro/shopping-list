import ingredients from '../../data/recipes.json';

const state={
      ingredients:[]
};

const getters={
      getIngredient:state=>state.ingredients
}

const actions={
      async fetchIngredient({commit}){
            console.log(ingredients)
            commit('setIngredient',ingredients);
      }
};

const mutations={
      setIngredient:(state,ingredients)=>(state.ingredients=ingredients),
      
};

export default{
      state,
      getters,
      actions,
      mutations
}
