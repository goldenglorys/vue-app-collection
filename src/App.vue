<template>
<AppHeader />
<div class="w-full flex">
  <Calendar />
</div>
  <!-- <QuestionHeader 
    :numCorrect="numCorrect"
    :numTotal="numTotal"
  />
  <div class="container">
  <div class="row">
    <div class="col-sm-6 col-lg-12 col-md-12">
        <QuestionBox 
          v-if="questions.length"
          :currentQuestion="questions[index]"
          :next="next"
          :increment="increment"
        />
    </div>
  </div>
</div> -->
</template>

<script>

// import QuestionHeader from './components/QuestionHeader.vue'
// import QuestionBox from './components/QuestionBox.vue'
import AppHeader from './components/AppHeader.vue'
import Calendar from './components/Calendar.vue'

export default {
  name: "App",
  components: {
    // QuestionHeader,
    // QuestionBox,
    AppHeader,
    Calendar,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  methods: {
    next() {
      this.index++
    },
    increment(isCorrect) {
      if(isCorrect){
        this.numCorrect++
      }
      this.numTotal++
    }
  },
  mounted: function(){
    fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple", {
      method: "GET"
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results
    })
  }
};
</script>

<style>

</style>
