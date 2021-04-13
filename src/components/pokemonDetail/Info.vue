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
      type: Number,
    },
    height: {
      type: Number,
    },
    types:{
      type: Array,
      default: Array
    },
  },

}
</script>

<style>

</style>