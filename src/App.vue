<template>
  <NavBar></NavBar>
  <!-- <HomePage></HomePage> -->
  <!-- eslint-disable -->
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavBar from './components/elements/NavBar.vue'
// import HomePage from './components/pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ffffff;
}
</style>
