<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <MainNavBar></MainNavBar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import MainNavBar from '@/primary/MainNavBar.vue'
import FooterBar from '@/primary/FooterBar.vue'
export default {
  name: 'app',
  components: {
    MainNavBar,
    FooterBar
  }
}

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
