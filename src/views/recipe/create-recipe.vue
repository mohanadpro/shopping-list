<template>
  <div class="create-recipe">
    <div class="container">
      <div class="row">
        <div class="col-md-12 form ">
          <div class="form-header">
            <h3><b>Create Recipe</b></h3>            
          </div>
          <form @submit.prevent="CreateRecipe">
            <div class="form-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="Enter recipe name"
                v-model="recipe.Name"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                placeholder="Please enter desciption"
                row="5"
                v-model="recipe.description"
                required
              />
            </div>
            <div class="form-group">
              <input type="text"  class="form-control" v-model="recipe.image"
               placeholder="please enter image url"
                required
               />
            </div>
            <div class="ingredient">
            
                  <div class="form-group">
                  <select v-model="recipe.ingredients" class="form-control" multiple>
                    <option
                      v-for="ingredient in getIngredient"
                      :key="ingredient.id"
                      >{{ ingredient.Name }}{{ ingredient.quantity }}</option
                    >
                  </select>
                  </div>            

            </div>
            <div class="actions">
                <button type="submit" class="btn btn-success">
                  Create
                </button>
                <button type="button" @click="onClickCancelCreation" class="btn btn-danger">
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
  name: "CreateRecipe",
  data: function() {
    return {
      recipe: {
        Name: "",
        description: "",
        image: "",
        ingredients: []
      }
    };
  },
  methods: {
    ...mapActions(["fetchIngredient","createRecipe","changeIsCreateRecipeActive"]),
    CreateRecipe() {
      
       this.createRecipe(this.recipe);
      this.changeIsCreateRecipeActive(false);
    },
    onClickCancelCreation()
    {
      this.changeIsCreateRecipeActive(false);
    }
  },
  mounted() {
    this.fetchIngredient();
  },
  computed: mapGetters(["getIngredient"])
};
</script>
<style lang="scss" scoped>
.create-recipe {
    width:30%;
  position: fixed;
  left: 35%;
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
  .actions{
    display: flex;
    justify-content: space-around;
  }
}
</style>
