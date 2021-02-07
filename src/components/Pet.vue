<template>
  <div class="w-full">
    <div class="text-center my-3">
      <router-link to="/adopt-pet">Home</router-link> |
      <router-link to="/cats">Cats</router-link> |
      <router-link to="/dogs">Dogs</router-link>
    </div>
    <div class="container text-center">
      <h1 class="text-2xl">{{ animal.name }} ({{ $route.params.species }})</h1>
      <p>Age: {{ animal.age }} years old</p>
      <p>Breed: {{ animal.breed }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {},
    };
  },
  computed: {
    ...mapState(["cats", "dogs"]),
  },
  mounted() {
    const filter = parseInt(this.$route.params.id) - 1;
    const animals = this[this.$route.params.species][filter];
    this.animal = animals;
  },
};
</script>

<style>
</style>