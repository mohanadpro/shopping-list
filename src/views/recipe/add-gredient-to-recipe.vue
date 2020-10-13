<template>
  <div class="add-ingredient">
    <div class="container">
      <div class="row">
        <div class="col-md-12 form ">
          <h3>Add Ingredient</h3>
          <form @submit.prevent="AddIngredientSubmit">
            <div class="form-group">
            <select class="form-control" v-model="addedIngredientVa.addedIngredient">
                  <option v-for="ingred in getIngredient" :key="ingred.id" :value="ingred">
                        {{ingred.Name}} || {{ingred.quantity}}
                  </option>
            </select>
            </div>

            <button type="submit" class="btn btn-success  btn-lg btn-block">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import router from '../../router'

export default {
  name: "AddIngredient",
  data: function() {
    return {
      ingredient: {
        id: 0,
        Name: "",
        quantity: 0
      },
      addedIngredientVa:{recipeId:0,addedIngredient:{id:0,Name:"",quantity:0}}
    };
  },
  props:["recipeId"],
  mounted(){
        this.fetchIngredient();
  },
  computed:mapGetters(["getIngredient"]),
  methods: {
    ...mapActions([
      "changeIsAddIngredientActive",
      "addIngredientToRecipe",
      "fetchIngredient"
    ]),
    
    AddIngredientSubmit() {
      
      this.addedIngredientVa.recipeId=this.recipeId;
      console.log(this.addedIngredientVa,'Mohanad');
      this.addIngredientToRecipe(this.addedIngredientVa);
      this.changeIsAddIngredientActive(false);
    }
  }
};
</script>
<style lang="scss" scoped>
.add-ingredient {
  position: absolute;
  left: 40%;
  z-index: 3;
  top: 0;
  margin-top: 10rem;
  .form {
    border: 1px solid #ccc;
    padding: 2rem;
    background-color: #fff;
  }
}
</style>
