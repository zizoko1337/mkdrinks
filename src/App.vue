<template>
  <NavBar></NavBar>
  <HomePage></HomePage>
</template>

<script>
import NavBar from './components/elements/NavBar.vue'
import HomePage from './components/pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar
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
}
</style>
