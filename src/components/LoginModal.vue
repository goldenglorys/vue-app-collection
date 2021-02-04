<template>
  <!-- <div v-if="isOpen"> -->
  <section
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    @click="$emit('close-login-modal')"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow z-30">
        <h1>Login</h1>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style>
</style>