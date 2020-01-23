<template>

  <div class="containerr">

    <link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <header class="head">
      <a name="PORTFOLIO"></a>
      <img class="logo" src="src/pages/hexal/assets/menu-logo.png" alt="logo">
      <nav class="text_l">
        <a href="#PORTFOLIO">PORTFOLIO</a>  ·
        <a href="#ABOUT">ABOUT</a>
      </nav>
      <div class="triangl"></div>
      <div class="line_l"></div>
      <div class="line_r"></div>
      <nav class="text_r">
        <a href="#BLOG">BLOG</a>  ·
        <a href="#GET">GET IN TOUCH</a>
      </nav>
    </header>

    <div class="photo">
      <a class="blog" name="BLOG"></a>
      <div class="left_top_line"></div>
      <img class="img1" src="src/pages/hexal/assets/1.png" width="180" height="208" alt="pic1">
      <img class="img2" src="src/pages/hexal/assets/2.png" width="180" height="208" alt="pic2">
      <img class="img3" src="src/pages/hexal/assets/3.png" width="180" height="208" alt="pic3">
      <img class="img4" src="src/pages/hexal/assets/4.png" width="180" height="208" alt="pic4">
      <div class="right_top_line"></div>
      <img class="img5" src="src/pages/hexal/assets/5.png" width="180" height="208" alt="pic5">
      <img class="img6" src="src/pages/hexal/assets/6.png" width="180" height="208" alt="pic6">
      <img class="img7" src="src/pages/hexal/assets/7.png" width="180" height="208" alt="pic7">
      <img class="img8" src="src/pages/hexal/assets/8.png" width="180" height="208" alt="pic8">
      <img class="img9" src="src/pages/hexal/assets/9.png" width="180" height="208" alt="pic9">
      <div class="left_bottom_line"></div>
      <img class="img10" src="src/pages/hexal/assets/10.png" width="180" height="208" alt="pic10">
      <img class="img11" src="src/pages/hexal/assets/11.png" width="180" height="208" alt="pic11">
      <img class="img12" src="src/pages/hexal/assets/12.png" width="180" height="208" alt="pic12">
      <img class="img13" src="src/pages/hexal/assets/13.png" width="180" height="208" alt="pic13">
      <div class="right_bottom_line"></div>
      <div class="bottom_line"></div>
    </div>

    <div class="content">

      <div></div>
      <a name="ABOUT"></a>
      <img class="man" src="src/pages/hexal/assets/man.png" width="180" height="208" alt="man">
      <span class="fio">Smith Anderson</span>
      <span class="proff">Illustrator & Character Designer</span>
      <div class="desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris porttitor, nibh at sagittis tristique, enim magna pretium augue,
          eget consectetur sem dui non urna. Integer gravida, diam congue molestie
          fringilla, elit odio rhon cus turpis, ac dictum libero elit vel metus.
          Morbi egestas sit amet velit eget venenatis. Mauris porttitor, nibh at
          sagittis tristique, enim magna pretium augue, eget consectetur sem dui non urna</p>
      </div>
      <div class="social">
        <a href="https://www.facebook.com" class="fa fa-facebook"></a>
        <a href="https://twitter.com" class="fa fa-twitter"></a>
        <a href="https://myaccount.google.com/" class="fa fa-google"></a>
        <a href="https://www.pinterest.com/" class="fa fa-pinterest"></a>
        <a href="https://www.linkedin.com/" class="fa fa-linkedin"></a>
        <a href="https://dribbble.com/" class="fa fa-dribbble"></a>
      </div>
      <div></div>
    </div>

    <div class="blank">

      <div></div>
      <a name="GET"></a>
      <span class="blank_name">Get In Touch</span>
      <span class="blank_desc">In order to get in touch use the contact form below:</span>
      <form action="#" method="post">
        <input type="text" class="in in_name" placeholder="Name (Required)" required>
        <input type="email" class="in in_email" placeholder="Email (Required)" required>
        <input type="text" class="in in_sub" placeholder="Subject">
        <textarea placeholder="Write your message here..."></textarea>
        <input class="button" type="submit" value="SEND">
      </form>
      <div class="adr">
        <p><strong>Quisque Hendrerit:</strong> purus dapi- bus, ornare nibh
          vitae, viverra nibh. Fusce vitae aliquam tellus. Proin sit amet volutpat libero.
          Nulla sed nunc et tortor luctus faucibus morbi vitae. </p>
      </div>
      <i class="fa fas fa-map-marker" aria-hidden="true"></i>
      <i class="fa fas fa-phone" aria-hidden="true"></i>
      <i class="fa fas fa-envelope" aria-hidden="true"></i>
      <div class="cor">
        <p>Elm St. 14/05 Lost City</p>
        <a class="click ph" href="tel:+35283318635">+ 3528 331 86 35</a>
        <a class="click mail" href="mailto:info@hexalcorp.com">info@hexalcorp.com</a>
      </div>
      <div></div>
    </div>

    <footer class="foot">
      <span>© Copyright 2013 by PSDchat</span>
    </footer>

  </div>

</template>

<script>
  export default {
    name: "hexal"
  }
</script>

<style scoped>

  .containerr{
    display: grid;
    grid-template-columns: 1fr 1020px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      ". head  ."
      ". photo   ."
      ". content ."
      ". blank    ."
      ". foot  .";
  }

  .head{
    position: relative;
    height: 63px;
    grid-area: head;
    display: grid;
    grid-template-columns: 1fr 65px 1fr;
    grid-template-rows: auto;
    grid-template-areas: "text_l logo text_r";
    background-color: #323232;
  }
  .photo{
    position: relative;
    height: 721px;
    grid-area: photo;
  }
  .content{
    position: relative;
    height: 341px;
    grid-area: content;
    display: grid;
    background-color: #2eb398;
  }
  .blank{
    position: relative;
    height: 564px;
    grid-area: blank;
    background-color: #323232;
  }
  .foot{
    position: relative;
    height: 43px;
    grid-area: foot;
    background-color: #222222;
  }
  .foot > span{
    position: relative;
    top: 12px;
    left: 39px;
    font-family: 'Maven Pro', sans-serif;
    font-size: 8.6pt;
    color: rgba(69, 69, 69, 255);
    text-align: justify;
  }

  .text_l{
    grid-area: text_l;
    position: absolute;
    top: 28px;
    left: 326px;
    width: 114px;
  }
  .text_r{
    grid-area: text_r;
    position: absolute;
    top: 28px;
    right: 327px;
    width: 114px;
  }
  a{
    font-size: 10px;
    font-family: 'Lato', sans-serif;
    color: #ebebeb;
    text-decoration: none;
  }
  a:hover{
    color: #2eb398;
  }

  .logo{
    grid-area: logo;
    margin-top: 10px;
  }
  .triangl{
    position: absolute;
    top: 62px;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 25px 45px 0 45px;
    border-color: #323232 transparent transparent transparent;
  }

  .line_l{
    position: absolute;
    width: 410px;
    height: 1px;
    border-bottom: 1px solid #dbe0e2;
    top: 74px;
    left: 30px;
  }
  .line_r{
    position: absolute;
    width: 410px;
    height: 1px;
    border-bottom: 1px solid #dbe0e2;
    top: 72px;
    right: 35px;
  }

  .blog{
    position: absolute;
    top: 1px;
  }
  .img1{
    position: relative;
    left: 120px;
    top: 90px;
  }
  .img2{
    position: relative;
    left: 136px;
    top: 90px;
  }
  .img3{
    position: relative;
    left: 152px;
    top: 90px;
  }
  .img4{
    position: relative;
    left: 168px;
    top: 90px;
  }

  .img5{
    position: absolute;
    left: 20px;
    top: 256px;
  }
  .img6{
    position: absolute;
    left: 220px;
    top: 256px;
  }
  .img7{
    position: absolute;
    left: 420px;
    top: 256px;
  }
  .img8{
    position: absolute;
    left: 620px;
    top: 256px;;
  }
  .img9{
    position: absolute;
    left: 820px;
    top: 256px;
  }

  .img10{
    position: absolute;
    left: 120px;
    top: 425px;
  }
  .img11{
    position: absolute;
    left: 320px;
    top: 425px;
  }
  .img12{
    position: absolute;
    left: 520px;
    top: 425px;
  }
  .img13{
    position: absolute;
    left: 720px;
    top: 425px;
  }

  .left_top_line{
    position: absolute;
    width: 1px;
    height: 104px;
    top: 141px;
    left: 99px;
    border-right: 1px solid #dbe0e2;
  }
  .left_bottom_line{
    position: absolute;
    width: 1px;
    height: 104px;
    top: 477px;
    left: 99px;
    border-right: 1px solid #dbe0e2;
  }
  .right_top_line{
    position: absolute;
    width: 1px;
    height: 104px;
    top: 141px;
    right: 99px;
    border-right: 1px solid #dbe0e2;
  }
  .right_bottom_line{
    position: absolute;
    width: 1px;
    height: 104px;
    top: 477px;
    right: 99px;
    border-right: 1px solid #dbe0e2;
  }
  .bottom_line{
    position: absolute;
    width: 960px;
    height: 1px;
    top: 709px;
    left: 30px;
    border-top: 1px solid #dbe0e2;
  }

  .man{
    position: absolute;
    left: 120px;
    top: 68px;
  }
  .fio{
    position: absolute;
    top: 63px;
    left: 319px;
    font-family: 'Maven Pro', sans-serif;
    font-size: 20pt;
    color: rgba(215, 252, 245, 255);
    text-align: justify;
    letter-spacing: 1.4px;
  }
  .proff{
    position: absolute;
    top: 95px;
    left: 321px;
    font-family: 'Maven Pro', sans-serif;
    font-size: 13pt;
    color: rgba(32, 129, 109, 255);
    text-align: justify;
  }
  .desc{
    position: absolute;
    top: 118px;
    left: 319px;
    width: 581px;
    height: 76px;
  }
  .desc > p{
    font-family: 'Lato', sans-serif;
    font-size: 9pt;
    line-height: 20px;
    color: rgba(215, 252, 245, 255);
    text-align: justify;
  }
  .social{
    position: absolute;
    top: 250px;
    left: 757px;
    width: 160px;
    height: 22px;
  }
  .fa {
    position: relative;
    margin-left: -4px;
    padding-top: 5px;
    font-size: 30px;
    width: 24px;
    height: 19px;
    text-align: center;
    text-decoration: none;
  }
  .fa-facebook {
    background: #6ccbbe;
    color: #02ac95;
  }
  .fa-facebook:hover{
    opacity: 0.9;
    background: #3B5998;
    color: white;
    border-radius: 50%;
  }
  .fa-twitter {
    background: #7ae1d4;
    color: #02ac95;
  }
  .fa-twitter:hover{
    opacity: 0.9;
    background: #55ACEE;
    color: white;
    border-radius: 50%;
  }
  .fa-google {
    background: #6ccbbe;
    color: #02ac95;
  }
  .fa-google:hover{
    opacity: 0.9;
    background: #dd4b39;
    color: white;
    border-radius: 50%;
  }
  .fa-linkedin {
    background: #6ccbbe;
    color: #02ac95;
  }
  .fa-linkedin:hover{
    opacity: 0.9;
    background: #007bb5;
    color: white;
    border-radius: 50%;
  }
  .fa-pinterest {
    background: #7ae1d4;
    color: #02ac95;
  }
  .fa-pinterest:hover{
    opacity: 0.9;
    background: #cb2027;
    color: white;
    border-radius: 50%;
  }
  .fa-dribbble {
    background: #7ae1d4;
    color: #02ac95;
  }
  .fa-dribbble:hover{
    opacity: 0.9;
    background: #ea4c89;
    color: white;
    border-radius: 50%;
  }
  .content > div:first-child{
    height: 316px;
    width: 1px;
    position: absolute;
    top: 13px;
    left: 99px;
    border-right: 1px solid #219d84;
  }
  .content > div:last-child{
    height: 316px;
    width: 1px;
    position: absolute;
    top: 13px;
    right: 99px;
    border-left: 1px solid #219d84;
  }

  .blank_name{
    position: absolute;
    top: 60px;
    left: 120px;
    font-family: 'Maven Pro', sans-serif;
    font-size: 23pt;
    color: rgba(224, 224, 224, 255);
    text-align: justify;
  }
  .blank_desc{
    position: absolute;
    top: 92px;
    left: 122px;
    font-family: 'Maven Pro', sans-serif;
    font-size: 18px;
    color: rgba(190, 190, 190, 255);
    text-align: justify;
  }
  .in, textarea{
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 15px;
    background-color: #454545;
    color: #959595;
    font-size: 12px;
    font-family: 'Lato', sans-serif;
    letter-spacing: -.5px;
    border: none;
    width: 565px;
  }
  .in_name{
    position: absolute;
    top: 134px;
    left: 120px;
  }
  .in_email{
    position: absolute;
    top: 188px;
    left: 120px;
  }
  .in_sub{
    position: absolute;
    top: 242px;
    left: 120px;
  }
  textarea{
    position: absolute;
    top: 296px;
    left: 120px;
    width: 563px;
    height: 126px;
    color: #959595;
  }
  .button{
    position: absolute;
    top: 462px;
    right: 320px;
    width: 90px;
    height: 36px;
    letter-spacing: -.5px;
    font-size: 12px;
    background-color: #2eb398;
    color: #cff8f0;
    border: none;
  }
  .button:hover{
    background-color: #94cdc4;
    color: #000000;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 2px 2px 4px #35d1e1;
  }
  .adr{
    position: absolute;
    top: 118px;
    right: 120px;
    width: 180px;
    height: 117px;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color: #b0b0b0;
    text-align: justify;
    line-height: 21px;
  }
  p > strong{
    color: #d3d3d3;
  }
  .fas{
    color: #2eb398;
    font-size:  10px;
  }
  .fa-phone{
    position: absolute;
    top: 310px;
    right: 280px;
  }
  .fa-map-marker{
    position: absolute;
    top: 290px;
    right: 280px;
  }
  .fa-envelope{
    position: absolute;
    top: 330px;
    right: 280px;
  }
  .cor{
    position: absolute;
    top: 280px;
    right: 157px;
    width: 121px;
    height: 54px;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color: #b0b0b0;
    text-align: justify;
    line-height: 21px;
  }
  .blank > div:first-child{
    height: 1px;
    width: 960px;
    position: absolute;
    top: 13px;
    left: 30px;
    border-top: 1px solid #2b2b2b;
  }
  .blank > div:last-child{
    height: 1px;
    width: 960px;
    position: absolute;
    top: 552px;
    left: 30px;
    border-top: 1px solid #2b2b2b;
  }
  .click{
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color: #b0b0b0;
  }
  .ph{
    position: absolute;
    padding-left: 1px;
    margin-top: -10px;
  }
  .mail{
    position: absolute;
    padding-left: 1px;
    margin-top: 10px;
  }




</style>
