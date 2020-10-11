<template>
  <div class="ingrendient-list">
    <div class="container mt-5">
      <div class="tbl-header">
            <h1>Recipes</h1>
            <button class="increase-font">
                <font-awesome-icon icon="plus"/>
            </button>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Desciption</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recipe in getRecipes" :key="recipe.id">
            <td>{{recipe.id}}</td>
            <td>{{recipe.Name}}</td>
            <td>{{recipe.Desciption}}</td>
            <td>{{recipe.image}}</td>
            <td class="actions">
              <button>
                <font-awesome-icon icon="edit" />
              </button>
              <button>
                <font-awesome-icon icon="trash-alt" />
              </button>
            <button>
                <font-awesome-icon icon="info" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: "ListRecipe",
  methods:{
    ...mapActions(["fetchRecipes"])
  },
  computed:mapGetters(["getRecipes"]),
  created(){
    this.fetchRecipes();
  }
};
</script>
<style lang="scss" scoped>
.ingrendient-list {
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
