<template>
<!-- eslint-disable -->
  <section class="vh-110">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong shadow" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign Up</h3>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="typeEmailX-2"
                  :class="loginBorder"
                  placeholder="Login"
                  v-model="login"
                  v-on:blur="validateLogin()"
                />
              </div>
              <p v-if="!loginValid" class="invalid-message">
                Login must have at least 5 characters and can't contain spaces
              </p>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-1"
                  :class="passwordBorder"
                  placeholder="Password"
                  v-model="password"
                  v-on:blur="validatePassword()"
                />
              </div>
              <p v-if="!passwordValid" class="invalid-message">
                Password must be minimum 6 characters long, must contain at
                least one number and special character
              </p>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-2"
                  :class="repeatedPasswordBorder"
                  placeholder="Repeat Password"
                  v-model="repeatedPassword"
                  v-on:blur="validateRepeatedPassword()"
                />
              </div>
              <p v-if="!repeatedPasswordValid" class="invalid-message">
                Passwords does not match
              </p>

              <button class="btn btn-primary btn-lg btn-block" type="submit" @click="submitRegister()">
                Create new account
              </button>

              <hr class="my-4" />

              <h4>Warning</h4>
              <p>
                This website is not a official project. The purpose of this
                website is to present frontend skills of author.
                <b>
                  Do not use your important password while creating new
                  account.
                </b>
                It is not be safe and i do not take responsibility for data
                leakage!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterNewUser',
  data() {
    return {
      login: '',
      password: null,
      repeatedPassword: null,

      loginBorder: 'form-control form-control-lg',
      loginValid: true,

      passwordBorder: 'form-control form-control-lg',
      passwordValid: true,

      repeatedPasswordBorder: 'form-control form-control-lg',
      repeatedPasswordValid: true,

      correctBorder: 'valid-input form-control form-control-lg',
      incorrectBorder: 'invalid-input form-control form-control-lg',

      dbKey: process.env.VUE_APP_DB,
    };
  },
  methods: {
    validateLogin() {
      if (this.login.length > 4 && !this.hasWhiteSpace(this.login)) {
        this.loginBorder = this.correctBorder;
        this.loginValid = true;
      } else {
        this.loginBorder = this.incorrectBorder;
        this.loginValid = false;
      }
    },
    hasWhiteSpace(s) {
      return /\s/g.test(s);
    },
    validatePassword() {
      if (
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
          this.password
        )
      ) {
        this.passwordBorder = this.correctBorder;
        this.passwordValid = true;
      } else {
        this.passwordBorder = this.incorrectBorder;
        this.passwordValid = false;
      }
    },
    validateRepeatedPassword() {
      if (
        this.password === this.repeatedPassword &&
        this.repeatedPassword != null
      ) {
        this.repeatedPasswordBorder = this.correctBorder;
        this.repeatedPasswordValid = true;
      } else {
        this.repeatedPasswordBorder = this.incorrectBorder;
        this.repeatedPasswordValid = false;
      }
    },
    submitRegister() {
      if (this.loginValid && this.passwordValid && this.repeatedPasswordValid) {
        axios.post(`${this.dbKey}/users/${this.login}.json`, {
            password: this.password,
            fav: { favDrinks: ['']},
        }).then(() => { alert(`Account ${this.login} has ben created`); this.$router.replace('/login'); });
      }else{
        alert(`Can't create account. Please make sure to input correct data`)
      }
    },
   
  },
};
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
  color: #42b983;
}
section {
  background-repeat: no-repeat, repeat;
  background-size: 100%;
  min-height: 1000px;
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
</style>
