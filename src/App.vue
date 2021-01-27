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
