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
  // props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      routerLists: [
        { title: "Vue App Collection", to: "/" },
        { title: "Calendly", to: "/calendly" },
        { title: "Quiz", to: "/quiz" },
        { title: "Markdown", to: "/markdown" },
        { title: "Chat", to: "/chat" },
        { title: "Crud", to: "/crud" },
        { title: "Tensorflow", to: "/tensorflow" },
        { title: "Adopt Pets", to: "/adopt-pet" },
        { title: "Todo Manager", to: "/todos" },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style></style>
