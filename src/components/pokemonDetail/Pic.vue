<template>
  <div class="background">
    <img 
      alt="pic"
      :src="urlpokemonPic"
      size="small"
      id="pokemon-pic"
    />
    <img 
      size="sm"
      variant="outline-danger"
      @click="$bvModal.hide('modal-center')"
      src="../../assets/closePokemonDetail.svg"
      class="closeDetail"
    />
  </div>
</template>

<script>
export default {
  props: {
    urlpokemonPic: {
      type: String,
      default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    },
  },

}
</script>

<style>
  #modal-center___BV_modal_header_ {
    padding: 0px !important;
  }

  .modal-body {
    padding: 0px !important;
  }

  .modal.show .modal-dialog {
    min-width: 570px !important;
  }
  .modal-content {
    border-radius: 5px !important;
  }

  .background {
    background-image: url("../../assets/backgroundPokemonDetail.svg") !important;
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-position: center;
    height: 220px;
    width: 100%;
    border-radius: 5px;
  }

  .closeDetail {
    position: absolute;
    right: 13px;
    top: 12px;
  }

  #pokemon-pic {
    margin-left: 139px;
    width: 250px;
    height: 250px
  }
</style>