<template>

  <main>
    <header></header>

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

  header{
    background-image: url("../assets/main-photo.png");
    background-size: cover;
    height: 100vh;
    background-position: center;
  }
</style>
