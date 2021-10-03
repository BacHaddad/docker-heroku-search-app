<template>
  <div>
    <input type="text" v-model="searchQuery" />
    <ul>
      <li v-for="animal in filteredAnimals" :key="animal"> {{ animal }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchFilter',

  data() {
    return {
      animals: ['cat', 'dog', 'parrot', 'goldfish', 'horse', 'elephant', 'ant', 'snake', 'crow', 'cow', 'eagle', 'rhinoceros', 'chimpanzee'],
      searchQuery: '',
    };
  },

  computed: {
    filteredAnimals() {
      return this.animals.filter((animal) => {
        return animal.includes(this.searchQuery);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
