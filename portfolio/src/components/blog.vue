<template>

  <main>
    <h1> My content block</h1>

    <MainSlider/>
  </main>

</template>

<script>
  import MainSlider from "./main-slider.vue";

    export default {
        name: "blog",
      components: {MainSlider}
    }
</script>

<style scoped>
  h1{
    color: #42b983;
  }
</style>
