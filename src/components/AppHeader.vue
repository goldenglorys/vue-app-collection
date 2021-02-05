<template>
  <nav
    class="w-full bg-gradient-to-r from-green-900 to-green-500 text-white px-4 py-4"
  >
    <router-link
      class="mx-2 hover:no-underline hover:text-white"
      v-for="item in routerLists"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
  </nav>
</template>

<script>
import firebase from "../helpers/firebase";

export default {
  props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      routerLists: [
        { title: "Vue App Collection", to: "/" },
        { title: "Calendly", to: "/calendly" },
        { title: "Quiz", to: "/quiz" },
        { title: "Markdown", to: "/markdown" },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("User logged out");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>