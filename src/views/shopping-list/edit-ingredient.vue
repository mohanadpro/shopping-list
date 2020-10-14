<template>
  <div class="edit-ingredient">
    <div class="container">
      <div class="row">
        <div class="col-md-12 form ">
          <div class="form-header">
          <h3><b>Edit Ingredient</b></h3>
          </div>
          <form @submit.prevent="EditIngredientSubmit">
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
                required
              />
            </div>
            <button type="submit" class="btn btn-success float-left">
              Edit
            </button>
            <button type="button" class="btn btn-danger float-right" @click="onClickCancelEdit">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import router from '../../router'

export default {
  name: "EditIngredient",
  data: function() {
    return {
      ingredient: {
        id: 0,
        Name: "",
        quantity: 0
      }
    };
  },
  props: ["editedIngredient"],
  methods: {
    ...mapActions([
      "changeIsEditIngredientActive",
      "createGredient",
      "editIngredient"
    ]),
    EditIngredientSubmit() {
      this.editIngredient(this.ingredient);
      this.changeIsEditIngredientActive(false);
    },
    onClickCancelEdit(){
      this.changeIsEditIngredientActive(false);
    }
  },
  beforeMount() {
    this.ingredient = {Name:this.editedIngredient.Name,id:this.editedIngredient.id,quantity:this.editedIngredient.quantity};
  }
};
</script>
<style lang="scss" scoped>
.edit-ingredient {
  position: fixed;
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
