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
  </nav>
</template>

<script>
export default {
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
};
</script>

<style>
</style>