<template>
  <Navbar/>
  <router-view></router-view>
  <FooterComponent/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FooterComponent
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
