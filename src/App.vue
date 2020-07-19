<template>
  <div id="app">
    <head>
  <title>InvoerApplicatie</title>
</head>
    <HelloWorld msg="Welcome to Your Vue.js projectBranch1" />
<TheNavigation></TheNavigation>
    <div id="nav">
      
    </div>
    <router-view />
  </div>
</template>




<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheNavigation from "./components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheNavigation
  }
};
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
