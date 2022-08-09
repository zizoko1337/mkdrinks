<template>
  <nav id="navbar" :class="navClasses">
    <div class="container-fluid ">
      <router-link to="/">
        <a class="navbar-brand">
          <img src="../../assets/logo.png" alt="mkDrinks logo"/>
        </a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/mkdrinks">
              <a class="nav-link active" aria-current="page">Home</a>
            </router-link>
          </li>

            <li v-if="!isUserLogged" class="nav-item">
              <router-link to="/mkdrinks/login">
                <a class="nav-link active">Log in</a>
              </router-link>
            </li>
            <li v-if="!isUserLogged" class="nav-item">
              <router-link to="/mkdrinks/register">
                <a class="nav-link active">Register</a>
              </router-link>  
            </li>
            
          <li v-if="isUserLogged" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Logged as {{userName}}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link :to="profileLink">
                  <a class="dropdown-item">User profile</a>
                </router-link>
              </li>
              <!-- <li><a class="dropdown-item" href="#">User settings</a></li> -->
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" @click="logOut">Log Out</a></li>
            </ul>
          </li>


        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search drink"
            aria-label="Search"
            v-model="drinkName"
          />
          <router-link :to="drinkLink">
            <button class="btn btn-outline-light" type="submit">Search</button>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  el: '#navbar',
  data() {
    return {
      drinkName: null,
      view: {
        topOfPage: true,
      },
      navClasses: 'navbar navbar-expand-lg navbar-dark sticky-top nav-colored',
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 10) {
        if (this.view.topOfPage) this.view.topOfPage = false;
        this.navClasses =
          'navbar navbar-expand-lg navbar-dark  border-bottom sticky-top nav-transparent';
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
        this.navClasses =
          'navbar navbar-expand-lg navbar-dark sticky-top nav-colored';
      }
    },
    logOut() {
      this.$store.commit('userLogOut');
      this.$router.replace('/mkdrinks');
    }
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.userState;
    },
    userName() {
      return this.$store.getters.userName;
    },
    profileLink() {
      return '/mkdrinks/profile/' + this.userName;
    },
     drinkLink() {
      return '/mkdrinks/drink/' + this.drinkName;
    }
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
}
img {
  max-width: 80px;
}
.nav-colored {
  background-color: #0060cd;
  transition: 2s background-color;
}
.nav-transparent {
  background-color: #0060cd8f;
  transition: 2s background-color;
}
</style>
