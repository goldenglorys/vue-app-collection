<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown Converter</h1>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border">
        <textarea
          ref="markdownTextArea"
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-200" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      text: "",
      timeout: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(input) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.text = input.target.value;
      }, 500);
    },
  },
  mounted() {
    this.$refs.markdownTextArea.focus();
  },
};
</script>

<style>
</style>