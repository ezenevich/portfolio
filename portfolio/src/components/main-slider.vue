<template>
  <div class="carousel slide" data-ride="carousel" id="slides">

    <ul class="carousel-indicators">
      <li class="active" data-target="#slides" data-slide-to="0">*</li>
      <li data-target="#slides" data-slide-to="1">*</li>
      <li data-target="#slides" data-slide-to="2">*</li>
    </ul>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/slide1.png" alt="slide one">
        <div class="carousel-caption">
          <h1 class="display-2">Hexal</h1>
          <h3>Look this task</h3>
          <router-link to="/hexal" class="btn btn-outline-light btn-lg">Look</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/slide2.jpg" alt="slide two">
        <div class="carousel-caption">
          <h1 class="display-2">NeutronMail</h1>
          <h3>Look this task</h3>
          <button type="button" class="btn btn-outline-light btn-lg">Look</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/slide3.jpg" alt="slide there">
        <div class="carousel-caption">
          <h1 class="display-2">domPallet</h1>
          <h3>Look this task</h3>
          <button type="button" class="btn btn-outline-light btn-lg">Look</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "main-slider"
    }
</script>

<style scoped>
  .carousel-inner{
    height: 500px;
  }

  .carousel-inner img{
    width: 100%;
    height: 100%;
  }

  .carousel-caption{
    position: absolute;
    top: 150px;
    text-shadow: 1px 1px 10px #000000;
  }

  .nav-link{
    color: #ffffff;
  }

  .nav-link:hover{
    color: #000000;
  }

</style>
