<template>
  <div v-if="!drinkError" class="col">
    <div v-if="isLoading" class="card shadow-sm justify-content-center align-items-center loading-card ">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>   
    <div v-else class="card shadow-2-strong shadow ">
      <div class="p-2">
        <img
          class="bd-placeholder-img card-img-top rounded-circle border border-primary border-2"
          :src="drinkImage"
          width="100%"
          height="200"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
      </div>
      <div class="card-body">
        <h3>{{ drinkName }}</h3>
          <li class="list-group-item" v-for="item in drinkDescription" :key="item">
            {{ item }}
          </li>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <router-link :to="drinkLink">
                <a type="button" class="btn btn-md btn-outline-dark">
                More details
                </a>
            </router-link>
          </div>
          <button v-if="isUserLogged && !isFav" @click="addToFav" type="button" class="btn btn-lg">
            <i class="far fa-star star-color"></i>
          </button>
          <button v-if="isUserLogged && isFav" @click="removeFromFav" type="button" class="btn btn-lg">
            <i class="fas fa-star star-color"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeDrinkCard',
  props: ['drinkId'],
  data() {
    return {
      drinkName: null,
      drinkDescription: null,
      drinkImage: null,
      drinkError: null,
      isLoading: true,
      dbKey: process.env.VUE_APP_DB,
    };
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.userState;
    },
    userName() {
      return this.$store.getters.userName;
    },
    userFavs() {
        return this.$store.getters.userFavs;
    },
    drinkLink() {
      return '/drink/' + this.drinkName;
    },
    isFav() {
        return Object.values(this.userFavs).includes(this.drinkId) ? true : false
    },
    
  },
  methods: {
    addToFav() {
        this.$store.commit('addToFav', this.drinkId);

        axios.get(
            `${this.dbKey}/users/${this.userName}.json`
        ).then((response) => {
            const id = Object.keys(response.data)[0];

            axios.put(
            `${this.dbKey}/users/${this.userName}/${id}/fav.json`, { favDrinks: this.userFavs }
            );

        })

    },
    removeFromFav() {
        this.$store.commit('removeFromFav', this.drinkId);

        axios.get(
            `${this.dbKey}/users/${this.userName}.json`
        ).then((response) => {
            const id = Object.keys(response.data)[0];

            axios.put(
            `${this.dbKey}/users/${this.userName}/${id}/fav.json`, { favDrinks: this.userFavs }
            );

        })
        
    }
  },
  mounted() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.drinkId}`
      )
      .then((response) => {
        this.isLoading = false;
        this.drinkError = false;
        this.drinkName = response.data.drinks[0].strDrink;
        this.drinkImage = response.data.drinks[0].strDrinkThumb,
        this.drinkDescription = [
          response.data.drinks[0].strCategory,
          response.data.drinks[0].strAlcoholic,
          response.data.drinks[0].strGlass,
        ];

      })
      .catch(() => {
        this.drinkError = true;
      });
      
  },
};
</script>

<style>
.loading-card {
    min-height: 400px;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  user-select: none;
}
.star-color {
    color: #0060cd;

}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
