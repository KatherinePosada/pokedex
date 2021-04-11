<template>
  <b-list-group>
    <b-list-group-item>Name: {{name}}</b-list-group-item>
    <b-list-group-item>Weight: {{weight}} </b-list-group-item>
    <b-list-group-item>Height: {{height}}</b-list-group-item>
    <b-list-group-item>Types: </b-list-group-item>
</b-list-group>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    weight: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    types:{
      type: String,
      default: ''
    },
  },

}
</script>

<style>

</style>