<template>
  <!-- <div v-if="isOpen"> -->
  <section
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    @click="$emit('close-login-modal')"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
        <div class="p-2 border">
          <h1 class="text-center text-2xl">Login</h1>
          <form class="p-2 my-2" @submit.prevent="submit()">
            <div class="my-4">
              <label for="email">Email Address</label>
              <input
                type="email"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email address"
                v-model="email"
              />
            </div>
            <div class="my-4">
              <label for="password">Password</label>
              <input
                type="password"
                class="rounded shadow p-2 w-full"
                placeholder="ENter your password"
                v-model="password"
              />
            </div>
            <div class="my-4">
              <button
                class="w-full rounded shadow-md bg-gradient-to-r from-green-600 to-green-400 text-white p-2"
                type="submit"
                v-if="!isLoading"
              >
                Submit
              </button>
              <button
                class="w-full rounded shadow-md bg-gray-200 p-2"
                disabled
                v-if="isLoading"
              >
                Loading...
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import firebase from "../helpers/firebase";
export default {
  data() {
    return {
      email: "email@domain.com",
      password: "password",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user);
          this.isLoading = false;
          this.closeLoginModal();
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          this.isLoading = false;
          this.closeLoginModal();
        });
    },
    closeLoginModal() {
      this.$emit("close-login-modal");
    },
  },
};
</script>

<style>
</style>