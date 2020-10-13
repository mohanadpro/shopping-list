<template>
  <div>
    <div class="ingrendient-list" v-if="isForceUpdate">
      <div class="container mt-5">
        <button class="float-right increase-font" @click="onClickAddRecipe">
          <font-awesome-icon icon="plus" />
        </button>
        <div class="row" >
          <div class="col-md-4"  v-for="recipe in recipeWithStates" :key="recipe.recipe.id">
            <div class="card" style="width: 18rem;">
              <div
                class="container-image-gredients" 
                :style='{"transform":(recipe.state?"rotateY(180deg)":null)}'
              >
                <div class="card-image">
                  <img
                    class="card-img-top"
                    src="../../../assets/food2.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-gredient">
                    <button @click="onClickAddIngredientToRecipe(recipe.recipe.id)" >
                          <font-awesome-icon icon="plus" class="increase-font"/>
                    </button>
                  <ul
                    class="list-group list-group-flush"
                    v-for="ingredient in recipe.recipe.ingredients"
                    :value="ingredient"
                    :key="ingredient.id"
                  >
                    <li class="list-group-item">
                      <div class="actions">
                        <div>
                          {{ ingredient.Name }} || {{ ingredient.quantity }}
                        </div>
                        <button
                          @click="
                            onClickDeleteIngredient(recipe.recipe.id,ingredient.id)
                          "
                        >
                          <font-awesome-icon icon="trash-alt" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <b>{{ recipe.recipe.Name }}</b>
                </h5>
                <p class="card-text card-paragraph">{{ recipe.recipe.description }}</p>
                <div v-for="recipe in getRecipes" :key="recipe.id"></div>
              </div>

              <div class="card-body">
                <button @click="onClickEditRecipe(recipe.recipe)">
                  <font-awesome-icon icon="edit" />
                </button>
                <button @click="onClickDeleteRecipe(recipe.recipe)">
                  <font-awesome-icon icon="trash-alt" />
                </button>
                <button @click="chageStateOfRecipe(recipe.recipe)">
                  <font-awesome-icon icon="info" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateRecipe v-if="getIsCreateRecipeActive" />
    <DeleteRecipe v-if="getIsDeleteRecipeActive" :recipe="recipe" />
    <EditRecipe v-if="getIsEditRecipeActive" :editedRecipe="editedRecipe" />
    <AddIngredient v-if="getIsAddIngredientActive" :recipeId="recipe.id"/>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CreateRecipe from "../create-recipe";
import EditRecipe from "../edit-recipe";
import DeleteRecipe from "../delete-recipe";
import AddIngredient from '../add-gredient-to-recipe';
export default {
  name: "ListRecipe",
  data: function() {
    return {
      isForceUpdate:true,
      recipeWithState:{recipe:{id:0,Name:'',description:"",ingredients:[]},state:false},      
      recipeWithStates:[]
      ,
      recipe: {
        Name: "",
        id: 0
      },
      editedRecipe: {
        id: "",
        Name: "",
        description: "",
        ingredients: []
      },
      deletedIngredient:{
        idRecipe:0,
        idIngredient:0
      }
    };
  },
  components: { CreateRecipe, EditRecipe, DeleteRecipe,AddIngredient },
  methods: {
    ...mapActions([
      "fetchRecipes",
      "changeIsCreateRecipeActive",
      "changeIsDeleteRecipeActive",
      "changeIsEditRecipeActive",
      "deleteIngredientInRecipeAction",
      "changeIsAddIngredientActive"
    ]),
    onClickDeleteIngredient(idRecipe,idIngredient) {
      this.deletedIngredient.idRecipe=idRecipe;
      this.deletedIngredient.idIngredient=idIngredient;
      this.deleteIngredientInRecipeAction(this.deletedIngredient);
    },
    chageStateOfRecipe(recipe) {
      let index = this.recipeWithStates
      .map(function(x) {
        return x.recipe.id;
      })
      .indexOf(recipe.id);
      this.isForceUpdate=false;      
      this.isForceUpdate=true;
      this.recipeWithStates[index].state=!this.recipeWithStates[index].state;
    },
    onClickAddIngredientToRecipe(id)
    {
      this.recipe.id=id;
      this.changeIsAddIngredientActive(true);
    },
    onClickAddRecipe() {
      this.changeIsCreateRecipeActive(true);
    },
    onClickDeleteRecipe(recipeTemp) {

      this.recipe = recipeTemp;
      this.changeIsDeleteRecipeActive(true);
    },
    onClickEditRecipe(recipeTemp) {
      for (let i = 0; i < recipeTemp.ingredients.length; i++) {
        this.editedRecipe.ingredients[i] = recipeTemp.ingredients[i];
      }
      this.editedRecipe = recipeTemp;
      this.changeIsEditRecipeActive(true);
    }
  },
  beforeMount(){    
    console.log('done');
    for(let i=0;i<this.getRecipes.length;i++)
    {
      this.recipeWithState.recipe=this.getRecipes[i]
      this.recipeWithState.state=false;
      this.recipeWithStates.push(this.recipeWithState);
      this.recipeWithState={}
    }
  },
  computed: mapGetters([
    "getRecipes",
    "getIsCreateRecipeActive",
    "getIsDeleteRecipeActive",
    "getIsEditRecipeActive",
    "getIsAddIngredientActive"
  ]),
  updated(){
    console.log(this.recipeWithStates)
    if(this.getRecipes.length!=this.recipeWithStates.length)
    {
      this.recipeWithStates=[];
            for(let i=0;i<this.getRecipes.length;i++)
            {
              this.recipeWithState.recipe=this.getRecipes[i]
              this.recipeWithState.state=false;
              this.recipeWithStates.push(this.recipeWithState);
              this.recipeWithState={}
            }
    }
    
  },
  created() {
    this.fetchRecipes();

  },
  mounted(){
      this.isForceUpdate=false;      
      this.isForceUpdate=true;
  }
};
</script>
<style lang="scss" scoped>
@import "./list-recipe.scss";
</style>
e