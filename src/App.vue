<template>
  <v-app id="app">
    <div id="nav">
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
