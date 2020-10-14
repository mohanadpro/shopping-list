<template>
  <div class="create-ingredient">
    <div class="container">
      <div class="row">
        <div class="col-md-12 form ">
          <h3>Create Ingredient</h3>
          <form @submit="CreateIngredientSubmit"> 
            <div class="form-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="Enter ingredient name"
                v-model="ingredient.Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control text-center"
                placeholder="Enter Quantity"
                v-model="ingredient.quantity"
                required
              />
            </div>
            <button type="submit" class="btn btn-success float-left">Create</button>
            <button type="button" class="btn btn-danger float-right" @click="onClickCancelCreation">Cancel</button>
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
  name: "CreateIngredient",
  data:function(){
    return {
      ingredient:{
        id:0,
        Name:'',
        quantity:''
      }
    }
  },
  methods:{
    ...mapActions(["changeIsCreateIngredientActive","createGredient"]),
    CreateIngredientSubmit(){
      this.createGredient(this.ingredient);
      this.changeIsCreateIngredientActive(false);
    },
    onClickCancelCreation()
    {
      this.changeIsCreateIngredientActive(false);
    }
  }
};
</script>
<style lang="scss" scoped>
.create-ingredient{
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
