import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { urlBase } from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonDetail: [],
    pokemonsFavourites: [],
    loadingPokemonDetail: true,
    namePokemon: '',
  },
  mutations: {
    setPokemonDetail(state, payload){
      state.pokemonDetail = payload
    },
    setPokemonsFavourites(state, payload){
      state.pokemonsFavourites = payload
    },
    setLoadingPokemonDetail(state, payload){
      state.loadingPokemonDetail = payload
    },
    setNamePokemon(state, payload){
      state.namePokemon = payload
    }
  },
  actions: {
    async getPokemonDetail({ commit }, name){
      console.log(name)
      axios
      .get(`${urlBase}/${name}`)
      .then(resp => {
        commit('setPokemonDetail', resp.data)
        commit('setLoadingPokemonDetail', false)
      })
      .catch(error => {
        console.error("couldn't get pokemon", error)
      })
      .finally(() => this.loading = false)
    },

    changePokemon({commit}, name){
      commit('setNamePokemon', name)
    }
  
  },
  modules: {
  }
})
