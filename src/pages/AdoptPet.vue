<template>
  <div class="w-full">
    <div class="text-center my-3">
      <router-link to="/adopt-pet">Home</router-link> |
      <router-link to="/cats">Cats</router-link> |
      <router-link to="/dogs">Dogs</router-link>
    </div>
    <div class="text-center">
      <h1 class="text-4xl">Adopt a new best friend.</h1>
      <button
        class="rounded shadow-md bg-gradient-to-r from-green-600 to-green-400 text-white p-2"
        @click="togglePetForm"
      >
        Add New Pet
      </button>
    </div>
    <div class="absolute w-full my-4" v-if="showPetForm">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
          <div class="p-2 border">
            <h1 class="text-center text-2xl">Add New Pet</h1>
            <form class="p-2 my-2" @submit.prevent="submit()">
              <div class="my-4">
                <label for="name">Pet Name</label>
                <input
                  type="text"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter pet name here"
                  v-model="formData.name"
                />
              </div>
              <div class="my-4">
                <label for="name">Pet Species</label>
                <select
                  class="rounded shadow p-2 w-full"
                  v-model="formData.species"
                >
                  <option value="" selected="true">Select Pet Species</option>
                  <option value="cats">Cat</option>
                  <option value="dogs">Dog</option>
                </select>
              </div>
              <div class="my-4">
                <label for="name">Pet Age</label>
                <input
                  type="number"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter pet age here"
                  v-model="formData.age"
                  min="0"
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
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showPetForm: false,
      isLoading: false,
      formData: {
        name: "",
        age: 0,
        species: null,
      },
    };
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    submit() {
      const { species, age, name } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      this.addPet(payload);
      this.formData = {
        name: "",
        age: 0,
        species: null,
      };
    },
  },
};
</script>

<style>
</style>