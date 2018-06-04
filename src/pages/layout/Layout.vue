<template>
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <Sidebar class="sidebar-container"></Sidebar>
    </div>
    <div class="main-container">
      <div class="app-main">
        <transition name="fade" mode="out-in">
          <div v-if="$route.meta.keepAlive">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
          <div v-if="!$route.meta.keepAlive">
            <router-view></router-view>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from './Sidebar.vue'
  export default {
    name: 'Layout',
    components: {
      Sidebar
    },
    computed: {}
  }

</script>
<style  scoped>

</style>
