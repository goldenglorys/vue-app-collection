<template>
  <section class="flex w-full">
    <!-- <div class="flex w-full"> -->
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
        <div class="flex justify-center">
          <img
            src="https://car-images.bauersecure.com/pagefiles/78015/tesla_roadster_08.jpg"
            width="200"
            alt=""
            ref="imgRef"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  setup() {
    const imgRef = ref();
    onMounted(async () => {
      console.log(imgRef.value);
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