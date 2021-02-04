<template>
  <nav class="w-full px-4 py-4 my-4 text-center">
    <a class="mx-4 text-3xl text-center hover:no-underline hover:text-black"
      >Quiz App</a
    >
    <a class="hover:no-underline hover:text-black"
      >Counter: {{ numCorrect }}/{{ numTotal }}</a
    >
  </nav>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"],
};
</script>