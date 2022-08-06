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
      <li v-for="idSet in visibleList" :key="idSet" class="my-3">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
          
          <HomeDrinkCard :drinkId="idSet[0]"></HomeDrinkCard>
          <HomeDrinkCard :drinkId="idSet[1]"></HomeDrinkCard>
          <HomeDrinkCard :drinkId="idSet[2]"></HomeDrinkCard>

        </div>
      </li>
      
      <button class="btn btn-primary m-5" @click="loadMoreDrinks">Load more</button>
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
  data() {
    return {
      idListVue: [ 11007, 11008, 11009, 11010, 11011, 11012, 11013, 11014, 11016, 11019, 11020, 11021, 11022, 11023, 11024, 11025, 11026, 11027, 11028, 11029, 11034, 11046, 11050, 11052, 11053, 11054, 11055, 11060, 11064, 11084, 11102, 11106, 11112, 11113, 11117, 11118, 11119, 11120, 11121, 11124, 11128, 11129, 11145, 11146, 11147, 11149, 11157, 11164, 11170, 11202, 11205, 11222, 11224, 11227, 11239, 11242, 11243, 11251, 11255, 11288, 11320, 11324, 11326, 11338, 11339, 11368, 11369, 11375, 11382, 11387, 11390, 11391, 11396, 11403, 11407, 11408, 11410, 11415, 11416, 11417, 11418, 11419, 11420, 11422, 11423, 11424, 11462, 11470, 11472, 11476, 11524, 11528, 11542, 11558, 11566, 11580, 11600, 11602, 11604, 11634, 11658, 11662, 11664, 11666, 11670, 11690, 11720, 11728, 11766, 11786, 11798, 11844, 11870, 11872, 11936, 11938, 11959, 11961, 11963, 11965, 11983, 11985, 11987, 11989, 11991, 11993, 12055, 12057, 12067, 12071, 12087, 12089, 12091, 12093, 12097, 12101, 12107, 12127, 12130, 12138, 12158, 12162, 12186, 12188, 12190, 12196, 12198, 12214, 12224, 12256, 12308, 12316, 12322, 12362, 12370, 12388, 12402, 12418, 12420, 12434, 12436, 12442, 12444, 12446, 12450, 12452, 12460, 12474, 12518, 12528, 12560, 12562, 12564, 12572, 12618, 12630, 12654, 12656, 12658, 12668, 12670, 12672, 12674, 12688, 12690, 12692, 12694, 12696, 12698, 12702, 12704, 12706, 12708, 12710, 12712, 12714, 12716, 12718, 12720, 12722, 12724, 12726, 12728, 12730, 12732, 12734, 12736, 12738, 12744, 12746, 12748, 12750, 12752, 12754, 12756, 12758, 12760, 12762, 12764, 12766, 12768, 12770, 12772, 12774, 12776, 12780, 12782, 12784, 12786, 12790, 12792, 12794, 12796, 12798, 12800, 12802, 13042, 13056, 13070, 13058, 13068, 13066, 13072, 13086, 13128, 11433, 13162, 13194, 13192, 13196, 13200, 13198, 13190, 13202, 13204, 13206, 13222, 13214, 13282, 13328, 13332, 13497, 13535, 13499, 13501, 13581, 13621, 13625, 13675, 13683, 13731, 13751, 13775, 13807, 13825, 13837, 13847, 13861, 13899, 14029, 13938, 13940, 14087, 14095, 14065, 14272, 14306, 14053, 14071, 14356, 14360, 14372, 14366, 14364, 14374, 14378, 14446, 14456, 14466, 14482, 14510, 14538, 14642, 14688, 14730, 14752, 14782, 15082, 15086, 15092, 15106, 15184, 15178, 15194, 15182, 15200, 15224, 15226, 15254, 15266, 15288, 15300, 15328, 15330, 15346, 15403, 15409, 15423, 15427, 15395, 15511, 15515, 15521, 15997, 16031, 16041, 16158, 16176, 16178, 16196, 16202, 16250, 16262, 16271, 16273, 16275, 16289, 16295, 16333, 16354, 16419, ],
      nextId: 9,
      visibleList: [ [11007, 11008, 11009], [11010, 11011, 11012], [11013, 11014, 11016] ]

    }
  },
  methods: {
    loadMoreDrinks() {
      this.loadRow();
      this.loadRow()
      this.loadRow()
    },
    loadRow() {
      this.visibleList.push([this.idListVue[this.nextId],this.idListVue[this.nextId+1],this.idListVue[this.nextId+2]]);
      this.nextId = this.nextId + 3;
    }
  },
  mounted() {

  }


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
li {
  list-style: none;
}
.home-content {
 min-height: 90px;
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
