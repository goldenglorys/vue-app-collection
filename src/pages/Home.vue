<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl md:text-4xl my-2">Vue App Collection</h1>
      <div class="">
        <div class="flex justify-around mb-4">
          <a
            class="hover:no-underline"
            href="https://github.com/goldenglorys/vue-app-collection"
            target="_blank"
            >GitHub Source Code</a
          >
        </div>

        <div class="flex justify-center">
          <div class="w-11/12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="app in list" :key="app.path" class="text-left my-4">
              <router-link class="w-full hover:no-underline" :to="app.path">
                <p class="text-xl font-semibold">
                  <span>&#10004;</span> {{ app.title }}
                </p>
              </router-link>
              <div>
                <div class="font-semibold mt-2">Covered:</div>
                <p v-for="topic in app.concepts" :key="topic">{{ topic }}</p>
              </div>
            </div>
            <div class="text-left my-4">
              <p class="text-xl font-semibold"><span>&#10004;</span> Login</p>
              <div class="">
                <div class="text-lg font-semibold">Topic Covered:</div>
                <p v-for="topic in login.concepts" :key="topic">{{ topic }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const list = ref([
      {
        path: "/calendly",
        title: "Calendar",
        concepts: ["Javascript Date", "Vue Router"],
      },
      {
        path: "/quiz",
        title: "Quiz",
        concepts: ["Javascript Fetch", "Open TDB API"],
      },
      {
        path: "/pet",
        title: "Adopt Pet",
        concepts: ["Javascript Fetch", "Open TDB API"],
      },
      {
        path: "/markdown",
        title: "Markdown",
        concepts: ["External JS Depedency", "Vue Mixins"],
      },
      {
        path: "/chat",
        title: "Chat",
        concepts: [
          "Firebase Realtime Database",
          "Vuex v4",
          "Custom Router Middleware",
        ],
      },
      {
        path: "/crud",
        title: "Crud",
        concepts: [
          "using axios",
          "external API",
          "reactive vue3 api",
          "pagination",
          "envirnment variable",
        ],
      },
      {
        path: "/tensorflow",
        title: "Tensorflow",
        concepts: [
          "Using Tensorflow with Vue",
          "Device Camera Open",
          "Working with Canvas",
        ],
      },
    ]);
    const login = ref({
      title: "Login Modal",
      concepts: [
        "Custom Modal",
        "Vue Custom Events Emitting",
        "Form Handling",
        "Firebase authentication",
        "Loading effect",
        "Template Refs",
        "Component props",
        "Firebase google login",
        "Refactoring with component",
        "Vue3 teleport",
      ],
    });
    return { list, login };
  },
};
</script>

<style></style>