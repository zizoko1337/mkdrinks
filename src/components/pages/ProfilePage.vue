<template>
    <!-- eslint-disable -->
    <section class="vh-110 page">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-12 col-lg-10 col-xl-10 ">
                    <div class="card sshadow-2-strong shadow  p-4" style="border-radius: 1rem">
                        
                        <img src="../../assets/user.png" alt="" class="my-4">
                        <h1>{{ this.id }}</h1>
                        <h3>Favorite drinks</h3>
                      
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <!-- <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div> -->
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row row-cols-3 row-cols-sm-3 row-cols-md-3 ">
                                        
                                    <div><HomeDrinkCard :drinkId="11007"></HomeDrinkCard></div>
    
                                    <div><HomeDrinkCard :drinkId="11008"></HomeDrinkCard></div>
                                    <div><HomeDrinkCard :drinkId="11009"></HomeDrinkCard></div>

                                    </div>
                                </div>
                                <div class="carousel-item active">
                                    <div class="row row-cols-3row-cols-sm-3 row-cols-md-3 ">
                                        
                                    <div><HomeDrinkCard :drinkId="11007"></HomeDrinkCard></div>
    
                                    <div><HomeDrinkCard :drinkId="11008"></HomeDrinkCard></div>
                                    <div><HomeDrinkCard :drinkId="11009"></HomeDrinkCard></div>

                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <img src="../../assets/left.png" alt="" class="arrow">
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <img src="../../assets/right.png" alt="" class="arrow">
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="container under-content"></div>
    </section>

</template>

<script>
import HomeDrinkCard from '../elements/HomeDrinkCard.vue'
import axios from 'axios';

export default {
    name: 'ProfilePage',
    props: ['id'],
    components: {
         HomeDrinkCard
     },
    data(){
        return {
            dbKey: process.env.VUE_APP_DB
        }
    },
    created() {
        axios.get(`${this.dbKey}/users.json` 
        ).then((response) => {
            if(this.id in response.data){
                console.log('correct user');
            }else{
                this.$router.replace('/notFound');
            }
         
         })
    }
}
</script>

<style scoped>
.under-content {
    height: 200px;
}

.arrow {
    max-width: 50px;
    transition: 1s ease-in-out;
}

.arrow:hover {
  animation: hithere 1s ease ;
}
@keyframes hithere {
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
}
</style>