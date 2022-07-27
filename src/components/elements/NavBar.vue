<template>
  <nav id="navbar" :class="navClasses">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#"
        ><img src="../../assets/logo.png" alt="mkDrinks logo"
      /></a>
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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sign up</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search drink"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
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
      if (window.pageYOffset > 100) {
        if (this.view.topOfPage) this.view.topOfPage = false;
        this.navClasses =
          'navbar navbar-expand-lg navbar-dark  border-bottom sticky-top nav-transparent';
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
        this.navClasses =
          'navbar navbar-expand-lg navbar-dark sticky-top nav-colored';
      }
    },
  },
};
</script>

<style scoped>
img {
  max-width: 80px;
}
.nav-colored {
  background-color: #050131;
  transition: 2s background-color;
}
.nav-transparent {
  background-color: #0501314e;
  transition: 2s background-color;
}
</style>
