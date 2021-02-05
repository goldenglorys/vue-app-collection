<template>
  <AppHeader @open-login-modal="isOpen = true" :isLoggedIn="isLoggedIn" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isOpen" @close-login-modal="isOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";

import firebase from "./helpers/firebase";

export default {
  name: "App",
  components: {
    AppHeader,
    LoginModal,
  },
  data() {
    return {
      isOpen: false,
      isLoggedIn: false,
      authuser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authuser = user;
        console.log(this.isLoggedIn);
      } else {
        this.isLoggedIn = false;
        this.authuser = {};
        console.log(this.isLoggedIn);
      }
    });
  },
};
</script>

<style>
</style>
