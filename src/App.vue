<template>
  <NavBar></NavBar>
  <!-- eslint-disable -->
  <main>
    <router-view></router-view>
  </main>
  <FooterBar></FooterBar>
</template>

<script>
import NavBar from './components/elements/NavBar.vue'
import FooterBar from './components/elements/FooterBar.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
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
  position: relative;
  min-height: 100vh;
  
}

</style>
