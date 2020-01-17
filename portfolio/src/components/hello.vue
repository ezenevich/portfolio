<template>
  <h1>{{ msg }}</h1>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome Webpack!'
      }
    }
  }
</script>

<style scoped>
  h1{
    color: aquamarine;
  }
</style>
