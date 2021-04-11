<template>
  <div>
    <div 
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      class="card mt-2 border-0"
    >
      <div class="card-body">
        <span class="pokemon float-left">
          {{ pokemon.name.replace(/^\w/, (c) => c.toUpperCase()) }}
        </span>
        <img 
          alt="star"
          src="../../assets/defaultStar.svg"
          size="small"
          class="star"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      default: Array
    },
  },
  data() {
    return {
    }
  },

}
</script>

<style scoped>
  .card {
    height: 60px !important;
    width: 570px !important;
  }
  .pokemon {
    font-family: 'Lato';
    font-weight: 500;
    font-size: 22px;
    font-style: normal;
    line-height: 26px;
  }

  .star {
    float: right;
    width: 28px;
    height: 28px;
  }
</style>