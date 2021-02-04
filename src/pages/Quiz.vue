<template>
  <div class="m-auto">
    <QuestionHeader :numCorrect="numCorrect" :numTotal="numTotal" />
    <div class="text-center">
      <QuestionBox
        v-if="questions.length"
        :currentQuestion="questions[index]"
        :next="next"
        :increment="increment"
      />
    </div>
  </div>
</template>

<script>
import QuestionHeader from "../components/QuestionHeader.vue";
import QuestionBox from "../components/QuestionBox.vue";
export default {
  components: {
    QuestionHeader,
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
  },
  mounted: function () {
    fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.questions = jsonData.results;
      });
  },
};
</script>

<style>
</style>