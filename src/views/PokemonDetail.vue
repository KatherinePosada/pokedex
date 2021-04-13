<template>
  <div>
    <div v-if="loadingPokemonDetail">Loading...</div>
    <b-modal v-else ref="modalDetail" class="modalDetail" id="modal-center" hide-header centered>
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
  </div>
  
</template>

<script>
import Pic from '../components/pokemonDetail/Pic.vue'
import Info from '../components/pokemonDetail/Info.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Pic,
    Info,
  },
  data() {
    return {
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
  },
  computed: {
    ...mapState(['namePokemon','pokemonDetail', 'loadingPokemonDetail'])
  },
  methods: {
    ...mapActions(['getPokemonDetail'])
  },
  mounted() {
    this.getPokemonDetail(this.namePokemon)
  }
}
</script>

<style>
  .modalDetail{
    width: 570px !important;
    height: 506px !important;
  }

  
</style>