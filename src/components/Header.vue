<template>
  <div class="app-head">
    <div class="border-bottom">
      <nav class="navbar-static-top" role="navigation" style="margin-bottom:0">
        <div class="navbar-header">
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    components: {
    },
    computed: {}
  }

</script>
<style  scoped>
  .border-bottom {
    border-bottom: 1px solid #e7eaec !important;
  }
  .navbar-static-top {
    background: url(../assets/logo.png) no-repeat 15px #fff;
    height: 60px !important;
  }
</style>
