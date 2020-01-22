<template>
  <div>

    <navigation/>

    <blog/>

    <footer-info/>

  </div>
</template>

<script>
  import Navigation from './components/navigation.vue'
  import Blog from "./components/blog.vue";
  import FooterInfo from "./components/footer-info.vue";


export default {
  name: 'app',
  components: {
    FooterInfo,
    Navigation,
    Blog
  }

}
</script>


<style>

#app2 {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 2px solid #42b983;
}

h1, h2 {
  font-weight: normal;
}

</style>
