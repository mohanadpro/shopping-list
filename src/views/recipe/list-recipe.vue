<template>
  <div class="ingrendient-list">
    <div class="container mt-5">
      <div class="row">
      <div class="col-md-4" v-for="recipe in getRecipes" :key="recipe.id">
            <div class="card" style="width: 18rem;">
              <div class="card-image">
                <!-- :src="recipe.image" -->
              <img class="card-img-top" src="../../assets/food1.jpg" alt="Card image cap">
              </div>
              <div class="card-body">
                <h5 class="card-title">{{recipe.Name}}</h5>
                <p class="card-text card-paragraph">{{recipe.desciption}}</p>
              </div>
              <div class="card-gredient">
              <ul class="list-group list-group-flush" v-for="ingredient in recipe.ingredients" :key="ingredient.Name">
                <li class="list-group-item">{{ ingredient.Name }} || {{ingredient.quantity}}</li>
              </ul>
              </div>

              <div class="card-body">
              <button>
                <font-awesome-icon icon="edit" />
              </button>
              <button>
                <font-awesome-icon icon="trash-alt" />
              </button>
            <button>
                <font-awesome-icon icon="info" />
              </button>
                          <button class="increase-font">
                <font-awesome-icon icon="plus"/>
            </button>
              </div>
            </div>
      </div>
      </div>
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

  .card{
    margin-bottom:1rem;
  }
  .card-image{
    z-index:2;
    height:200px;
  }
  .card-paragraph{
    height:100px;
    overflow-x:auto;
  }
  .card-gredient{
    transform: rotateY(180deg);
    position:absolute;
    height:200px;
    overflow-x:auto;
    width:100%
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
