<template>
    <!-- eslint-disable -->
    <section class="vh-110 page">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-12 col-lg-10 col-xl-10 ">
                    <div class="card shadow-2-strong shadow  p-4" style="border-radius: 1rem">
                        <div class="text-center">
                            <img src="../../assets/user.png" alt="" class="my-4">
                        </div>
                        <h1>{{ this.id }}</h1>
                        <h3 v-if="renderedFavs[0][0] != null">Favorite drinks</h3>
                        <h3 v-else>No favorite drinks</h3>                 
                        <span v-if="renderedFavs[0][0] != null" v-for="idSet of renderedFavs" :key="idSet">
                                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 m-2 g-3">
                                    <HomeDrinkCard :drinkId="idSet[0]"></HomeDrinkCard>
                                    <HomeDrinkCard :drinkId="idSet[1]"></HomeDrinkCard>  
                                    <HomeDrinkCard :drinkId="idSet[2]"></HomeDrinkCard>  
                                 </div>
                        </span>
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
            renderedFavs: [],
            dbKey: process.env.VUE_APP_DB
        }
    },
    methods: {
        renderFavs(){
           
            for(var i = 1; i < this.userFavs.length; i = i + 3){
                /* eslint-disable */
                while(this.userFavs[i] == null && i < this.userFavs.length){
                    i++
                };
                const firstIndex = i;
                i++
                while(this.userFavs[i] == null && i < this.userFavs.length){
                    i++
                };
                const secondIndex = i;
                i++
                while(this.userFavs[i] == null && i < this.userFavs.length){
                    i++
                };
                const thirdIndex = i;
                this.renderedFavs.push([
                    this.userFavs[firstIndex],
                    this.userFavs[secondIndex],
                    this.userFavs[thirdIndex]
                ])
            }
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
         
         });
         this.renderFavs();
         console.log(this.renderedFavs)
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
    },

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