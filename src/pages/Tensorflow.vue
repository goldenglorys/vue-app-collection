<template>
  <section class="flex w-full">
    <!-- <div class="flex w-full"> -->
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
        <div class="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1610470850940-27b52ca7c0fe"
            width="200"
            alt=""
            ref="imgRef"
            crossorigin="anonymous"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  setup() {
    const imgRef = ref({});
    onMounted(async () => {
      const img = imgRef.value;
      // Load the model.
      const model = await cocoSsd.load();

      // Classify the image.
      const predictions = await model.detect(img);

      console.log("Predictions: ");
      console.log(predictions);
    });
    return { imgRef };
  },
};
</script>

<style>
</style>