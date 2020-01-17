<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome Elisei'
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  border: 2px solid #42b983;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
