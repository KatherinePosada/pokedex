<template>
  <div class="div-search">
    <img 
      alt="search"
      src="../../assets/pokemons/search.svg"
      size="small"
      class="search-icon"
    />
    <input 
      class="form-control search border border-white"
      placeholder="Search"
    >
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .div-search .search-icon {
    position: absolute;
  }

  .div-search {
    width: 570px;
    margin-bottom: 40px;
    display: flex;
  }

  .search-icon {
    padding: 10px;
    min-width: 20px;
    margin-top: 25px;
  }

  .search {
    margin-top: 25px;
    width: 100%;
    padding: 10px;
    padding-left: 40px;
  }
</style>