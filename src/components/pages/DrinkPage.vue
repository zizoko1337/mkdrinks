<template>
    <!-- eslint-disable -->
    <section class="vh-110 page">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center ">
                <div v-if="isLoading" class="col-12 col-md-10 col-lg-10 col-xl-8 ">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div v-else class="col-12 col-md-10 col-lg-10 col-xl-8">
                    <div v-if="!drinkExist" class="card p-5 shadow-2-strong shadow justify-content-between align-items-center" style="border-radius: 1rem">
                        
                        <h1>{{ drink }} does not exist in our database</h1>
                        <h2>or you made a typo. Please check the spelling</h2>
                        <img src="../../assets/badsearch.png" alt="">
                        
                    </div>
                    
                    <div v-else class="card shadow-2-strong shadow justify-content-between align-items-center" style="border-radius: 1rem">

                        <img 
                            v-if="drinkExist"
                            class="card-img-top rounded-circle border border-primary border-2 my-5 shadow-2-strong shadow"
                            :src="drinkImage"
                            width="100%"
                            height="200"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        />
                        <h1>{{ drinkName }}</h1>
                        <button v-if="isUserLogged" type="button" class="btn btn-lg ">
                            <i class="far fa-star"></i>
                        </button>
                        <p class="fs-3">{{drinkDescription[0]}} {{drinkDescription[1]}} {{drinkDescription[2]}}</p>
                        <h2>Ingredients</h2>
                        <ul>
                            <li v-for="ingredient in drinkIngredients" :key="ingredient">
                                <span class="badge bg-primary rounded-pill">{{ingredient.ingredientName}}</span> 
                                {{ingredient.ingredientMeasure}}  
                            </li>
                        </ul>
                        <h2>Instruction</h2>
                        <p class="mx-3">{{drinkInstructions}}</p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="container under-content"></div>
    </section>

</template>

<script>
import axios from 'axios';

export default {
    name: 'DrinkPage',
    props: ['drink'],
    data(){
        return {
            isLoading: true,
            drinkExist: true,
            drinkName: null,
            drinkImage: null,
            drinkInstructions: null,
            drinkDescription: [],
            drinkIngredients: [],
        }
    },
    computed: {
        isUserLogged() {
        return this.$store.getters.userState;
        },
    },
    mounted() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.drink}`
      )
      .then((response) => {
        this.isLoading = false;
        this.drinkName = response.data.drinks[0].strDrink;
        this.drinkImage = response.data.drinks[0].strDrinkThumb;
        this.drinkInstructions = response.data.drinks[0].strInstructions;
        this.drinkDescription = [
          response.data.drinks[0].strCategory,
          response.data.drinks[0].strAlcoholic,
          response.data.drinks[0].strGlass,
        ];
        if(response.data.drinks[0].strIngredient1 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient1,
                ingredientMeasure: response.data.drinks[0].strMeasure1,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient2 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient2,
                ingredientMeasure: response.data.drinks[0].strMeasure2,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient3 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient3,
                ingredientMeasure: response.data.drinks[0].strMeasure3,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient4 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient4,
                ingredientMeasure: response.data.drinks[0].strMeasure4,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient5 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient5,
                ingredientMeasure: response.data.drinks[0].strMeasure5,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient6 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient6,
                ingredientMeasure: response.data.drinks[0].strMeasure6,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient7 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient7,
                ingredientMeasure: response.data.drinks[0].strMeasure7,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient8 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient8,
                ingredientMeasure: response.data.drinks[0].strMeasure8,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient9 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient9,
                ingredientMeasure: response.data.drinks[0].strMeasure9,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient10 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient10,
                ingredientMeasure: response.data.drinks[0].strMeasure10,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient11 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient11,
                ingredientMeasure: response.data.drinks[0].strMeasure11,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient12 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient12,
                ingredientMeasure: response.data.drinks[0].strMeasure12,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient13 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient13,
                ingredientMeasure: response.data.drinks[0].strMeasure13,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient14 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient14,
                ingredientMeasure: response.data.drinks[0].strMeasure14,
                ingredientPicture: null
            });
        }
        if(response.data.drinks[0].strIngredient15 != null){
            this.drinkIngredients.push({
                ingredientName: response.data.drinks[0].strIngredient15,
                ingredientMeasure: response.data.drinks[0].strMeasure15,
                ingredientPicture: null
            });
        }

      })
      .catch(() => {
        this.drinkExist = false;
        this.isLoading = false;
      });
  },
}
</script>

<style scoped>
section {
    min-height: 100vh;
}
h2 {
    color: black;
}
li {
   list-style: none;
   text-align: left;
}
.under-content {
    height: 200px;
}
</style>