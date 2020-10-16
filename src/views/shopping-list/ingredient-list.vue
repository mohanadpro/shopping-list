<template>
  <div class="ingrendient-list">
          <div class="header">
        <router-link to="/recipe">Recipes</router-link>
      </div>
    <div class="container mt-5">
      <div class="tbl-header">
            <h1>Ingredient</h1>
            <button class="increase-font" @click="onClickAddGredient">
                <font-awesome-icon icon="plus"/>
            </button>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Ingrendient</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ingredient in getIngredient" :key="ingredient.id">
            <td>{{ingredient.id}}</td>
            <td>{{ingredient.Name}}</td>
            <td>{{ingredient.quantity}}</td>
            <td class="actions">
              <button @click="onClickEditGredient(ingredient)">
                <font-awesome-icon icon="edit" />
              </button>
              <button  @click="onClickDeleteGredient(ingredient)">
                <font-awesome-icon icon="trash-alt" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CreateIngredient v-if="getIsCreateIngredientActive"/>
    <DeleteGredient v-if="getIsDeleteIngredientActive" :deletedIngredient="ingredient"/>
    <EditIngredient v-if="getIsEditIngredientActive" :editedIngredient="ingredient"/>
    
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import CreateIngredient from './create-ingredient';
import DeleteGredient from './delete-ingredient';
import EditIngredient from './edit-ingredient';
export default {
  name: "IngredientList",
  data:function(){
    return {
      ingredients:[],
      ingredient:{
        Name:'',
        quantity:0,
        id:0
      }
    }
  },
  components:{CreateIngredient,DeleteGredient,EditIngredient},
  methods:{
    ...mapActions(["fetchIngredient","changeIsCreateIngredientActive","changeIsDeleteIngredientActive","changeIsEditIngredientActive"]),
    onClickAddGredient(){
      this.changeIsCreateIngredientActive(true)
    },
    onClickDeleteGredient(ingredientTemp){
      this.ingredient=ingredientTemp;      
      this.changeIsDeleteIngredientActive(true)
    },
    onClickEditGredient(ingredientTemp)
    {
      this.ingredient=ingredientTemp;   
      this.changeIsEditIngredientActive(true)
    }
  },
  computed:mapGetters(["getIngredient","getIsCreateIngredientActive","getIsDeleteIngredientActive","getIsEditIngredientActive"]),
  created(){
    this.fetchIngredient();
  },
  beforeRouteLeave(to,from,next){
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
};
</script>
<style lang="scss" scoped>
.ingrendient-list {
  .header{
      height: 100px;
      background-color: #0b1341;

      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .tbl-header{
    display: flex;
    justify-content: space-between;
  }
  .increase-font{
    font-size:30px;
  }
  .actions {
    display: flex;
    justify-content: space-around;
  }
      button {
      background: none;
      border: none;
      color: rgb(28, 50, 124);
    }
}
</style>
