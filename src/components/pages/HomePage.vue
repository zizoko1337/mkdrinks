<template>
  
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Welcome to mkDrinks</h1>
        <p class="lead shadow-letters">Enjoy your favorite drinks</p>
        <p class="lead shadow-letters">Discover new recipes</p>
        <p>
          <router-link to="/login">
            <a class="btn btn-primary my-2 m-2">Log in</a>
          </router-link>
          <router-link to="/register">
            <a class="btn btn-primary my-2 m-2">Sign up</a>
          </router-link>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <HomeDrinkCard :drinkId="11007"></HomeDrinkCard>
        <HomeDrinkCard :drinkId="11008"></HomeDrinkCard>
        <HomeDrinkCard :drinkId="11009"></HomeDrinkCard>

        <HomeDrinkCard :drinkId="11010"></HomeDrinkCard>
        <HomeDrinkCard :drinkId="11011"></HomeDrinkCard>
        <HomeDrinkCard :drinkId="11012"></HomeDrinkCard>

        <HomeDrinkCard :drinkId="11013"></HomeDrinkCard>
        <HomeDrinkCard :drinkId="11014"></HomeDrinkCard>
        <HomeDrinkCard :drinkId="11016"></HomeDrinkCard>


        
      </div>
    </div>
  </div>
  <div class="home-content"></div>
</template>

<script>
import HomeDrinkCard from '../elements/HomeDrinkCard.vue'

export default {
  name: 'HomePage',
  components: {
    HomeDrinkCard
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
  text-shadow: 2px 2px #000000;
}
section {
  background-image: url('https://img4.goodfon.com/wallpaper/nbig/3/af/napitki-frukty-bokaly-cocktails.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  background-position: right 50% bottom 10%;
  max-width: 100%;
}
.home-content {
 min-height: 150px;
}
.shadow-letters {
  color: white;
   text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
  font-size: 3.5rem;
  }
}
@media (max-width: 630px) {
  section {
    background-size: cover;
    background-position: right 50% bottom 100px;
  }
}
@media (max-width: 1500px) and  (min-width: 1000px){
  section {
    background-size: cover;
    background-position: right 50% bottom 0;
  }
}
@media (max-width: 1000px) and  (min-width: 630px){
  section {
    background-size: cover;
    background-position: right 50% bottom 100px;
  }
}
</style>
