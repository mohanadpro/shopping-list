import recipes from "../../data/recipes.json";

const state = {
  recipes: [],
  isCreateRecipeActive: false,
  isDeleteRecipeActive: false,
  isEditRecipeActive: false,
  isAddIngredientActive: false,
};

const getters = {
  getRecipes: (state) => state.recipes,
  getIsCreateRecipeActive: (state) => state.isCreateRecipeActive,
  getIsDeleteRecipeActive: (state) => state.isDeleteRecipeActive,
  getIsEditRecipeActive: (state) => state.isEditRecipeActive,
  getIsAddIngredientActive: (state) => state.isAddIngredientActive,
};

const actions = {
  fetchRecipes({ commit }) {
    
    commit("setRecipes", recipes);
  },
  async changeIsCreateRecipeActive({ commit }, newState) {
    commit("setIsCreateRecipeActive", newState);
  },
  async changeIsDeleteRecipeActive({ commit }, newState) {
    commit("setIsDeleteRecipeActive", newState);
  },
  async changeIsAddIngredientActive({ commit }, newState) {
    commit("setIsAddIngredientRecipeActive", newState);
  },
  async changeIsEditRecipeActive({ commit }, newState) {
    commit("setIsEditRecipeActive", newState);
  },
  async createRecipe({ commit }, newRecipe) {
    newRecipe.id = state.recipes.length + 1;
    commit("addRecipe", newRecipe);
  },
  async deleteRecipeAction({ commit }, id) {
    let deletedRecipe = state.recipes;
    for (var i = deletedRecipe.length - 1; i >= 0; i--) {
      if (deletedRecipe[i].id === id) {
           deletedRecipe.splice(i, 1);
      }
    }
    commit("setRecipes", deletedRecipe);
  },
  deleteIngredientInRecipeAction({ commit }, deletedIngredient) {
    let index = state.recipes
      .map(function(x) {
        return x.id;
      })
      .indexOf(deletedIngredient.idRecipe);
    let deletedRecipe = state.recipes[index];
    for (var j = 0; j < deletedRecipe.ingredients.length; j++) {
      if (deletedRecipe.ingredients[j].id === deletedIngredient.idIngredient) {
        deletedRecipe.ingredients.splice(j, 1);
      }
    }
    commit("updateRecipe", deletedRecipe, index);
  },
  addIngredientToRecipe({ commit }, addedIngredientVa) {
    let index = state.recipes
    .map(function(x) {
      return x.id;
    })
    .indexOf(addedIngredientVa.recipeId);
    commit("addIngredientToRecipe",{addedIngredientVa,index});
  },
  async editRecipe({commit},editedRecipe)
  {
        
        let updatedRecipes=state.recipes;
        let index=updatedRecipes.map(function(x) {return x.id; }).indexOf(editedRecipe.id);
        updatedRecipes[index].Name=editedRecipe.Name;
        updatedRecipes[index].description=editedRecipe.description;
        updatedRecipes[index].image=editedRecipe.image;
        var counter=1;
        updatedRecipes[index].ingredients.splice(0,updatedRecipes[index].ingredients.length);
        while(updatedRecipes[index].ingredients.length<editedRecipe.ingredients.length)
        {
           let ingredient={Name:"",id:counter,quantity:0};
          updatedRecipes[index].ingredients.push(ingredient);
          counter++;
        }
        for(let i=0;i<editedRecipe.ingredients.length;i++)
        {        
          updatedRecipes[index].ingredients[i].id=editedRecipe.ingredients[i].ingredient.quantity;
          updatedRecipes[index].ingredients[i].Name=editedRecipe.ingredients[i].ingredient.Name;
          updatedRecipes[index].ingredients[i].quantity=editedRecipe.ingredients[i].ingredient.quantity;
        }
        commit('setIngredient',updatedRecipes);
  }
};

const mutations = {
  setRecipes: (state, recipes) => {(state.recipes = recipes);},
  setIsCreateRecipeActive: (state, newState) =>
    (state.isCreateRecipeActive = newState),
  setIsDeleteRecipeActive: (state, newState) =>
    (state.isDeleteRecipeActive = newState),
  setIsEditRecipeActive: (state, newState) =>
    (state.isEditRecipeActive = newState),
  addRecipe: (state, newRecipe) => state.recipes.push(newRecipe),
  updateRecipe: (state, updatedRecipe, index) => {
    state.recipes[index] = updatedRecipe;
  },
  setIsAddIngredientRecipeActive: (state, newState) => {
    state.isAddIngredientActive = newState;
  },
  addIngredientToRecipe:(state,{addedIngredientVa,index})=>
  {
        state.recipes[index].ingredients.push(addedIngredientVa.addedIngredient);

  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
