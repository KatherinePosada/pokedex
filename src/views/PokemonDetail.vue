<template>
  <b-modal ref="modalDetail" class="modalDetail" id="modal-center" hide-header centered>
    <Pic 
      v-if="pokemonDetail !== []" 
      :urlpokemonPic="pokemonDetail.sprites.front_default || '' "
    />
    <Info
      :name = "pokemonDetail.name"
      :weight = "pokemonDetail.weight"
      :height = "pokemonDetail.height"
      :types = "pokemonDetail.types"
    />
  </b-modal>
</template>

<script>
import axios from 'axios';
import { urlBase } from '../config'
import Pic from '../components/pokemonDetail/Pic.vue'
import Info from '../components/pokemonDetail/Info.vue'

export default {
  components: {
    Pic,
    Info,
  },
  props: {
    name: {
      type: String,
      default: ''
    },
  },
  created() {
    try {
      axios
        .get(`${urlBase}/${this.name}`)
        .then(resp => (this.pokemonDetail = resp.data));
    } catch (error) {
      console.error("Could't get pokemons");
    }
  },
  data() {
    return {
      pokemonDetail: []
    }
  },

}
</script>

<style>
  .modalDetail{
    width: 570px !important;
    height: 506px !important;
  }

  
</style>