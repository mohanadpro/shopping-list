<template>
  <div class="add-ingredient">
    <div class="container">
      <div class="row">
        <div class="col-md-12 form ">
          <h3>Add Ingredient</h3>
          <form @submit.prevent="AddIngredientSubmit">
            <div class="form-group">
            <select class="form-control" v-model="addedIngredientVa.addedIngredient">
                  <option v-for="ingred in tempIngredient" :key="ingred.id" :value="ingred">
                        {{ingred.Name}} || {{ingred.quantity}}
                  </option>
            </select>
            </div>

            <button type="submit" class="btn btn-success float-left">
              Add
            </button>
            <button type="button" @click="onClickCanecelAddIngredient" class="btn btn-danger float-right">
              Cancel
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
      tempIngredient:[],
      addedIngredientVa:{recipeId:0,addedIngredient:{id:0,Name:"",quantity:0}}
    };
  },
  props:["recipeId","ingredientsInRecipe"],
  mounted(){
    this.fetchIngredient();

    this.tempIngredient=[];
    for(var i=0;i<this.getIngredient.length;i++)
    {
      this.tempIngredient.push(this.getIngredient[i]);
    }
    for(var index=0;index<this.ingredientsInRecipe.length;index++)
    {
      for(var j=0;j<this.tempIngredient.length;j++)
      {
        if(this.ingredientsInRecipe[index].id==this.tempIngredient[j].id)
        {
          this.tempIngredient.splice(j,1);
          break;
        }
      }
    }
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
      this.addIngredientToRecipe(this.addedIngredientVa);
      this.changeIsAddIngredientActive(false);
    },
    onClickCanecelAddIngredient(){
      this.changeIsAddIngredientActive(false);

    }
  }
};
</script>
<style lang="scss" scoped>
.add-ingredient {
  position: fixed;
  width:20%;
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
