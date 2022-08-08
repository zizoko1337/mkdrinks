<template>
<!-- eslint-disable -->
  <section class="vh-110">
    <div class="container py-5 h-100 ">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
          <div class="card shadow-2-strong shadow" style="border-radius: 1rem ">
            <div class="card-body p-5 text-center ">
              <h3 class="mb-5">Log In</h3>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="typeEmailX-2"
                  class="form-control form-control-lg"
                  placeholder="Login"
                  v-model="login"
                />
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-1"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  v-model="password"
                  @keyup.enter="submitLogin()"
                />
              </div>

              <button class="btn btn-primary btn-lg btn-block" type="submit" @click="submitLogin()">
                Log In
              </button>
              
              <div class="register-link">
                <p>Not registered yet?
                  <router-link to="/register">
                    Create new account
                  </router-link>  
                </p>
              </div>
              
            
            </div>
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
  name: 'LogIn',
  data() {
    return {
      login: '',
      password: null,
      favs: null,
      dbKey: process.env.VUE_APP_DB,
    };
  },
  methods: {
    submitLogin() {
        axios.get(`${this.dbKey}/users/${this.login}.json` 
        ).then((response) => {
          if(this.password === Object.values(response.data)[0].password){
            this.favs = this.userFavHandler(Object.values(response.data)[0].fav.favDrinks)
            this.localLogin(this.favs)
            }else{
            alert(`Wrong password`) 
           }
         }).catch((err) => {alert(`User ${this.login} does not exist`); console.log(err)});
    },

    localLogin() {
       this.$store.commit('userLogIn', this.login);
       this.$store.commit('userLogInFavs', this.favs);
       this.$router.replace('/home');
    },
    userFavHandler(obj) {
      const arr = [];
      for (const item of obj) {
        arr.push(item)
      }
      return arr
    }

  },
  computed: {
    userFavs() {
        return this.$store.getters.userFavs;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: white;
}
h2 {
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3593ff;
}

.register-link{
  margin: 15px 0;
}
.invalid-input {
  border-color: red;
}
.valid-input {
  border-color: rgb(0, 255, 0);
}
.invalid-message {
  font-size: 0.8rem;
  color: red;
}
.under-content {
    height: 200px;
}
</style>
