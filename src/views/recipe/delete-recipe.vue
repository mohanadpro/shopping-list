<template>
      <div class="delete-recipe-model">
            <div>
            <h3>
                  <b>Are you sure you want to delete recipe {{recipe.Name}}</b>
            </h3>
            <div class="actions">
                  <button @click="deleteRecipe" class="btn btn-success">
                        Yes
                  </button>
                  <button @click="closeModel" class="btn btn-danger">
                        No
                  </button>
            </div>
            </div>

      </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
      name:'DeleteRecipe',
      props:["recipe"],
      methods:{
                ...mapActions(["changeIsDeleteRecipeActive","deleteRecipeAction"]),
            closeModel(){
                  this.changeIsDeleteRecipeActive(false);
            },
            deleteRecipe(){        
                  this.deleteRecipeAction(this.recipe.id);
                  this.changeIsDeleteRecipeActive(false);
            }
      }
}
</script>
<style lang="scss" scoped>
.delete-recipe-model{
      background-color:white;
      text-align:left;
      width:50%;
      display:flex;
      justify-content: center;
      align-items: center;
      height:200px;
      padding:20px;
      position:absolute;
      top:200px;
      left:30%;
      .actions{
            width:15%;
            display:flex;
            justify-content: space-between;
      }
}
</style>
