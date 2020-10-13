import ingredientsData from '../../data/ingrendient.json';

const state={
      ingredients:[],
      isCreateIngredientActive:false,
      isDeleteIngredientActive:false,
      isEditIngredientActive:false,
      
};

const getters={
      getIngredient:state=>state.ingredients,
      getIsCreateIngredientActive:state=>state.isCreateIngredientActive,
      getIsDeleteIngredientActive:state=>state.isDeleteIngredientActive,
      getIsEditIngredientActive:state=>state.isEditIngredientActive,
}

const actions={
      async fetchIngredient({commit}){
            commit('setIngredient',ingredientsData);
      },
      async createGredient({commit},newGredient){    
            newGredient.id=state.ingredients.length+1;        
            commit('addGredient',newGredient)
      },
      async changeIsCreateIngredientActive({commit},newState)
      {
            commit('setIsCreateIngredientActive',newState)
      },
      async changeIsDeleteIngredientActive({commit},newState)
      {
            commit('setIsDeleteIngredientActive',newState)
      },
      async changeIsEditIngredientActive({commit},newState)
      {
            commit('setIsEditIngredientActive',newState)
      },
      async editIngredient({commit},editedIngredient)
      {
            let updatedgredients=state.ingredients;
            let index=updatedgredients.map(function(x) {return x.id; }).indexOf(editedIngredient.id);
            updatedgredients[index].quantity=editedIngredient.quantity;
            commit('setIngredient',updatedgredients);
      },     
       async deleteGredientAction({commit},id){

            let updatedgredients=state.ingredients;
            for (var i = updatedgredients.length - 1; i >= 0; i--) {
                  if (updatedgredients[i].id === id) {
                         updatedgredients.splice(i, 1);
                  }
            }
            commit('setIngredient',updatedgredients);
      },
};

const mutations={
      setIngredient:(state,ingredients)=>(state.ingredients=ingredients),
      setIsCreateIngredientActive:(state,newState)=>(state.isCreateIngredientActive=newState),
      setIsDeleteIngredientActive:(state,newState)=>(state.isDeleteIngredientActive=newState),
      setIsEditIngredientActive:(state,newState)=>(state.isEditIngredientActive=newState),
      addGredient:(state,newGredient)=>(state.ingredients.push(newGredient))

}

export default{
      state,
      getters,
      actions,
      mutations
}
