<template>
 <div class="container">
   <Search />
   <List :pokemons=pokemons />

 </div>
</template>

<script>
import axios from 'axios';
import { urlBase } from '../config'
import Search from '../components/pokemons/Search.vue';
import List from '../components/pokemons/List.vue';

export default {
  components: {
    Search,
    List,
  },
  created() {
    try {
      axios
        .get(urlBase)
        .then(resp => (this.pokemons = resp.data.results));
    } catch (error) {
      console.error("Could't get pokemons");
    }
  },
  data() {
    return {
      pokemons: []
    }
  },
  methods: {
    
  },

}
</script>

<style scoped>
  .container{
    width: 44% !important;
    max-width: 1280px !important;
    margin: auto !important;
  }
</style>