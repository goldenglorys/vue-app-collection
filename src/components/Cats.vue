<template>
  <div class="w-full">
    <div class="text-center my-3">
      <router-link to="/adopt-pet">Home</router-link> |
      <router-link to="/cats">Cats</router-link> |
      <router-link to="/dogs">Dogs</router-link> |
      <router-link to="/pet">Pet</router-link>
    </div>
    <div class="container">
      <h1 class="text-center text-4xl my-4">Cats for Adoption</h1>
      <table class="table table-striped table-hover text-center">
        <thead>
          <th>Name</th>
          <th>Breed</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Color</th>
          <th>Weight</th>
          <th>Location</th>
          <th>Notes</th>
        </thead>
        <tbody>
          <tr v-for="cat in cats" :key="cat.name">
            <td>{{ cat.name }}</td>
            <td>{{ cat.breed }}</td>
            <td>{{ cat.gender }}</td>
            <td>{{ cat.age }}</td>
            <td>{{ cat.color }}</td>
            <td>{{ cat.weight }}</td>
            <td>{{ cat.location }}</td>
            <td>{{ cat.notes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cats from "../data/cats";

export default {
  data() {
    return {
      cats,
    };
  },
};
</script>

<style>
</style>