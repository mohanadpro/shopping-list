<template>
  <div class="edit-ingredient">
    <div class="container">
      <div class="row">
        <div class="col-md-12 form ">
          <h3>Edit Ingredient</h3>
          <form @submit="EditIngredientSubmit"> 
            <div class="form-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="Enter ingredient name"
                v-model="ingredient.Name"
                disabled
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control text-center"
                placeholder="Updated Quantity"
                v-model="ingredient.quantity"
              />
            </div>
            <button type="submit" class="btn btn-success  btn-lg btn-block">Edit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
// import router from '../../router'

export default {
  name: "EditIngredient",
  data:function(){
    return {
      ingredient:{
        id:0,
        Name:'',
        quantity:0
      }
    }
  },
  props:["editedIngredient"],
  methods:{
    ...mapActions(["changeIsCreateIngredientActive","createGredient","editIngredient"]),
    EditIngredientSubmit(){
      console.log(this.ingredient);
      this.editIngredient(this.editedIngredient);
      this.changeIsCreateIngredientActive(false);
    }
  },
  beforeMount()
  {
    this.ingredient=this.editedIngredient;
  }
};
</script>
<style lang="scss" scoped>
.edit-ingredient{
      position: absolute;
      left:40%;
      z-index:3;
      top:0;
  margin-top: 10rem;
      .form{
  border:1px solid #CCC;
padding:2rem;
background-color: #FFF;
      }
}
</style>
