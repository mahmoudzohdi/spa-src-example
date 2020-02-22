<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
    <router-link to="/home">Go to home</router-link>
    </p>
    <p>
    <router-link to="/about">Go to about</router-link>
    </p>

    <router-view></router-view>
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
