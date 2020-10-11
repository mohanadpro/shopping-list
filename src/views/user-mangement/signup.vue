<template>
  <div class="sign-in">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-left">
            <h3>Our website is ....</h3>
          <p >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            voluptates tenetur non! Possimus nostrum assumenda officia unde quo
            error veniam dignissimos voluptas rerum, quisquam dolorem illum
            eligendi aliquid. Quasi, iure?
          </p>
          <ul >
            <li><p>voluptates tenetur non! Possimus nostrum</p></li>
            <li><p>dignissimos voluptas rerum</p></li>
            <li><p>liquid. Quasi, iure?</p></li>
            <li>Possimus nostrum assumenda officia unde quo</li>
          </ul>
        </div>
        <div class="col-md-5 offset-md-1 form ">
          <h3>Sign Up</h3>
          <form @submit="SignUp"> 
            <div class="form-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="Enter username"
                v-model="user.username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control text-center"
                placeholder="Password"
                v-model="user.password"
              />
            </div>
            <button type="submit" class="btn btn-primary  btn-lg btn-block">Sign Up</button>

            <div class="form-group">
              <router-link class="btn btn-info btn-lg btn-block mt-1" to="/">I already have an account</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import router from '../../router'

export default {
  name: "SignIn",
  data:function(){
    return {
      user:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    ...mapActions(["signUp"]),
    SignUp(){
      this.signUp(this.user);
      if(this.getIsSignUpSuccess)
      {
        router.push("/")
      }
      else
      {
        console.log('error')
      }
    }
  },
  computed:mapGetters(["getIsSignUpSuccess"]),
};
</script>
<style lang="scss" scoped>
.sign-in {
  margin-top: 10rem;
      .form{
  border:1px solid #CCC;
padding:2rem;
background-color: #FFF;
      }
}
</style>
