<template>
  <div class="form-model">
    <div id="form-header">
      <slot name="form-header"></slot>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form>
          <div id="form-fields" >
            <slot name="form-fields" ></slot>
          </div>
          <div id="form-controls">
            <slot name="form-controls"></slot>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Model",
  props: ["width"],
};
</script>

<style lang="scss" scoped>
$fontSize: 20px;
.form-model {
  width: 40%;
  position: fixed;
  top:5rem;
  left:30%;
  background-color: #FFF;
  #form-header {
    font-size: $fontSize;
    font-weight: bold;
    background-color: green;
    color: white;
    border-radius: 0 70% 0 70%;
    margin-bottom: 3rem;
    padding:2rem;
  }
  #form-controls{
        margin-bottom: 5rem;
  }
}
</style>
