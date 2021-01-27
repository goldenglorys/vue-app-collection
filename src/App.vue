<template>
  <Header/>
  <div class="container">
  <div class="row">
    <div class="col-sm-6 col-lg-12 col-md-12">
        <QuestionBox/>
    </div>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
  },
  data() {
    return {
      questions: [] 
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
