<template>
      <div class="container delete-gredient-model">
            <h3>
                  <b>Are you sure you want to delete grendient {{deletedIngredient.Name}}</b>
            </h3>
            <div class="actions">
                  <button @click="deleteGredient" class="btn btn-success">
                        Yes
                  </button>
                  <button @click="closeModel" class="btn btn-danger">
                        No
                  </button>
            </div>
      </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
      name:'DeleteIngredient',
      props:["deletedIngredient"],
      methods:{
            ...mapActions(["changeIsDeleteIngredientActive","deleteGredientAction"]),
            closeModel(){
                  this.changeIsDeleteIngredientActive(false)
            },
            deleteGredient(){
                 const gredientId=this.deletedIngredient.id;
                 this.deleteGredientAction(gredientId)
                  this.changeIsDeleteIngredientActive(false)

            }
      },
      mounted(){
                  // console.log(this.deletedIngredient.id)
                  // console.log(this.deletedIngredient.name)

      }
}
</script>
<style lang="scss" scoped>
.delete-gredient-model{
      background-color:white;
      text-align:left;
      width:50%;
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
