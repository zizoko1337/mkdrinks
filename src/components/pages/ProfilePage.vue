<template>
    <!-- eslint-disable -->
    <section class="vh-110 page">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem">
                        
                        <h1>Profile Of {{ this.id }}</h1>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import axios from 'axios';

export default {
    name: 'ProfilePage',
    props: ['id'],
    data(){
        return {
            dbKey: process.env.VUE_APP_DB
        }
    },
    created() {
        axios.get(`${this.dbKey}/users.json` 
        ).then((response) => {
            console.log(response.data);
            if(this.id in response.data){
                console.log('correct user');
            }else{
                this.$router.replace('/notFound');
            }
         
         }).catch((error) => {
            // this.$router.replace('/notFound');
            console.log(error)
         });
    }
}
</script>

<style>
section {
  background: #6b0a0a;
  background-repeat: no-repeat, repeat;
  background-size: 100%;
  min-height: 1000px;
}
</style>