<template>
  <div v-if="!drinkError" class="col">
    <div class="card shadow-sm">
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
            <button type="button" class="btn btn-md btn-outline-dark">
              More details
            </button>
          </div>
          <button type="button" class="btn btn-lg ">
            <i class="far fa-star"></i>
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
    };
  },
  mounted() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.drinkId}`
      )
      .then((response) => {
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
</style>
