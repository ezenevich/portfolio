<template>

    <nav class="navbar navbar-expand-md navbar-dark sticky-top">
      <a href="#" class="navbar-bard"><img src="../assets/main-logo.png" height="50" alt="logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-responsive">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-responsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About me</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacts" class="nav-link">Contacts</router-link>
          </li>
        </ul>
      </div>
    </nav>

</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>
  .navbar{
    background-color: #000000;
  }

  .navbar-nav li{
    padding-right: 20px;
    font-size: 20px;
  }



</style>
