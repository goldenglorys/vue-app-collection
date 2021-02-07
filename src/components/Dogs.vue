<template>
  <div class="w-full">
    <div class="text-center my-3">
      <router-link to="/adopt-pet">Home</router-link> |
      <router-link to="/cats">Cats</router-link> |
      <router-link to="/dogs">Dogs</router-link>
    </div>
    <div class="container">
      <h1 class="text-center text-4xl my-4">Dogs for Adoption</h1>
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
          <tr v-for="dog in dogs" :key="dog.id">
            <td>
              <router-link
                :to="`/pets/dogs/${dog.id}`"
                class="hover: no-underline"
                style="text-decoration: none"
                >{{ dog.name }}</router-link
              >
            </td>
            <td>{{ dog.breed }}</td>
            <td>{{ dog.gender }}</td>
            <td>{{ dog.age }}</td>
            <td>{{ dog.color }}</td>
            <td>{{ dog.weight }}</td>
            <td>{{ dog.location }}</td>
            <td>{{ dog.notes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogs"]),
  },
};
</script>

<style>
</style>