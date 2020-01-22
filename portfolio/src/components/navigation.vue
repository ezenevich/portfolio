<template>

  <header id="header">
    <nav class="navbar navbar-expand-md navbar-dark sticky-top">

      <a href="#" class="navbar-bard"><img src="../assets/main-logo.png" height="50" alt="logo"></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-responsive">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-responsive">

        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a href="#" class="nav-link" >Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About me</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contacts</a>
          </li>

        </ul>
      </div>
    </nav>



  </header>

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

  header{
    background-image: url("../assets/main-photo.png");
    background-size: cover;
    height: 100vh;
  }

</style>
