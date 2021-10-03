<template>
  <div id="app">
    <img alt="search" src="./assets/search.jpg" />
    <SearchFilter />
  </div>
</template>

<script>
import SearchFilter from './components/SearchFilter.vue'

export default {
  name: 'App',
  components: {
    SearchFilter
  }
}
</script>

<style>

img {
  border-radius: 40rem;
  max-width: 30%;
  margin-bottom: 4rem ;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
