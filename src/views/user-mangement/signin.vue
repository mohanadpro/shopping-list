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
          <h3>Sign In</h3>
          <form >
            <div class="form-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control text-center"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary  btn-lg btn-block">Sign In</button>

            <div class="form-group">
              <router-link class="btn btn-info btn-lg btn-block mt-1" to="/signup">I don't have an account</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
};
</script>
<style lang="scss" scoped>
.sign-in {
  margin-top: 10rem;
      .form{
  border:1px solid #AAA;
padding:2rem;
background-color: #FFF;
      }
}
</style>
