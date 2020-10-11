<template>
  <div class="alert alert-danger  fade show" role="alert">
    <strong>{{message}}</strong> 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AlertMessage",
  props: ["message"]
};
</script>