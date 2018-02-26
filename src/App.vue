<template>
  <div id="app">
    <router-link to="/ES6">ES6</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/DragableController">DragableController</router-link>
    <hr style="height:1px;border:none;border-top:1px ridge gray;"/>
    <br>
    <router-link to="/iViewTabs">iViewTabs</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    this.$router.push('/')
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  font-size:18px;
}
</style>
