<template>
    <div>
        <div class="jumbotron">
            <p class="lead">
                {{ currentQuestion.question }}
            </p>
            <hr class="my-4">
            <ul class="list-group">
                <li class="list-group-item"
                v-for="(answer, index) in answers"
                :key="index"
                @click="selectAnswer(index)"
                :class="answerClass(index)"
                >{{ answer }}</li>
            </ul>
            <a class="btn btn-primary btn-lg" href="#" role="button"
                @click="submitAnswer"
                :class="selectedIndex === null || answered ? 'disabled': '' "
            >
                Submit
            </a>
             <a class="btn btn-success btn-lg" href="#" role="button" 
             @click="next"
             >
                 Next
            </a>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {
        currentQuestion: Object,
        next: Function,
        increment: Function
    },
    data() {
        return {
            selectedIndex: null,
            correctIndex: null,
            shuffledAnswers: [],
            answered: false,
        }
    },
    computed: {
        answers() {
            let answers = [...this.currentQuestion.incorrect_answers]
            answers.push(this.currentQuestion.correct_answer)
            return answers
        }
    },
    watch: {
        currentQuestion: {
           immediate: true,
           handler() {
                this.selectedIndex = null
                this.shuffleAnswers()
                this.answered = false
           }
        }
    },
    methods: {
        selectAnswer(index) {
            this.selectedIndex = index
        },
        shuffleAnswers() {
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
        },
        submitAnswer() {
            let isCorrect = false
            isCorrect = this.selectedIndex === this.correctIndex ? true : false
            this.increment(isCorrect)
            this.answered = true
        },
        answerClass(index) {
            let answerClass = '' 
            if (!this.answered && this.selectedIndex == index) {
                answerClass = 'selected'
            } else if (this.answered && this.correctIndex == index ) {
                answerClass = 'correct'
            } else if (this.answered && this.selectedIndex == index && this.correctIndex != index) {
                answerClass = 'incorrect'
            }
            return answerClass
        }
    },
}
</script>

<style scoped>
    .list-group {
        margin-bottom: 15px;
    }

    .list-group-item:hover {
         background: #EEE;
         cursor: pointer;
    }

    .btn{
        margin: 0 5px;
    }
    
    .selected {
        background-color: lightblue;
    }

    .correct {
        background-color: lightgreen;
    }

    .incorrect {
        background-color: red;
    }
</style>