<template>
  <div class="edit-recipe">
    <div class="container">
      <div class="row">
        <div class="col-md-12 form ">
          <h3>Edit Recipe</h3>
          <form @submit.prevent="EditRecipe">
            <div class="form-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="Enter recipe name"
                v-model="recipe.Name"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                placeholder="Please enter description"
                row="5"
                v-model="recipe.description"
              />
            </div>
            <div class="ingredient">
              <div class="form-group">
                <select
                  v-model="recipe.ingredients"
                  class="form-control"
                  multiple
                >
                  <option
                    v-for="checkedIngredient in checkedIngredients"
                    :key="checkedIngredient.ingredient.id" :value="checkedIngredient"
                  >
                    {{ checkedIngredient.ingredient.Name }}{{ checkedIngredient.ingredient.quantity }}</option
                  >
                </select>
              </div>
            </div>
            <div class="actions">
              <button type="submit" class="btn btn-success">
                Edit
              </button>
              <button @click="onClickCancel" class="btn btn-danger">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditRecipeComp",
  data: function() {
    return {
      recipe: {
        id:0,
        Name: "",
        description: "",
        image: "",
        ingredients: [],
      },
      checkedIngredients: [],
      ingredientWithState: {
        ingredient: {
          id:0,
          Name: "",
          quantity: 0,
        },
        state: false,
      },
      
    };
  },
  props: ["editedRecipe"],
  methods: {
    ...mapActions(["fetchIngredient", "changeIsEditRecipeActive","editRecipe"]),
    EditRecipe() {
       this.editRecipe(this.recipe);
      this.changeIsEditRecipeActive(false);
    },
    onClickCancel() {
      this.changeIsEditRecipeActive(false);
    },
  },

  mounted() {
    this.fetchIngredient();
  for(let i=0;i<this.getIngredient.length;i++)
  {
          this.ingredientWithState.ingredient={Name:this.getIngredient[i].Name,
          quantity:this.getIngredient[i].quantity,id:this.getIngredient[i].id}
          this.ingredientWithState.state = false;
          this.checkedIngredients.push(this.ingredientWithState);
          this.ingredientWithState={}
  }

    for (let i = 0; i < this.getIngredient.length; i++) {
      for (let j = 0; j < this.recipe.ingredients.length; j++) 
        if (this.getIngredient[i].id == this.recipe.ingredients[j].id) {
          this.ingredientWithState.ingredient = this.getIngredient[i];
          this.ingredientWithState.state = true;
          this.checkedIngredients[i]=this.ingredientWithState;
          this.ingredientWithState={}
          break;
        }      
    }
  },
  beforeMount() {
    this.recipe.Name = this.editedRecipe.Name;
    this.recipe.id = this.editedRecipe.id;
    this.recipe.description = this.editedRecipe.description;
    console.log(this.recipe,"before mounted");
  },
  computed: mapGetters(["getIngredient"]),
};
</script>
<style lang="scss" scoped>
.edit-recipe {
  position: absolute;
  left: 40%;
  z-index: 3;
  top: 0;
  margin-top: 10rem;
  .ingredient {
    display: flex;
    justify-content: space-between;
  }
  .form {
    border: 1px solid #ccc;
    padding: 2rem;
    background-color: #fff;
  }
  .actions {
    display: flex;
    justify-content: space-around;
  }
}
</style>
