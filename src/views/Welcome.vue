<template>
  <div class="container">
    <img 
      alt="pikachuWelcome"
      src="../assets/pikachuWelcome.svg"
      size="small"
      class="pikachu-welcome"
    />

    <h2>Welcome to Pokédex</h2>

    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
    </p>

    <button 
      type="button"
      class="btn rounded-pill btn-get-started"
      @click="$router.push({name: 'Pokemons'})" 
    >
      Get started
    </button>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container{
    width: 44% !important;
    max-width: 1280px !important;
    margin: auto !important;
  }

  .pikachu-welcome{
    width: 325px;
    height: 288px;
    margin-top: 50px;
  }

  h2{
    font-family: 'Lato';
    font-weight: bold;
    font-style: normal;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    margin-top: 35px;
  }

  p{
    font-family: 'Lato';
    font-weight: 500;
    font-size: 18px;
    font-style: normal;
    line-height: 27px;
    text-align: center;
    margin-top: 20px;
  }

  .btn-get-started{
    background-color: #F22539;
    color: #FFF;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    padding: 18px;
    margin-top: 35px;
  }
</style>