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
                :class="[selectedIndex == index ? 'selected' : '']"
                >{{ answer }}</li>
            </ul>
            <a class="btn btn-primary btn-lg" href="#" role="button">Submit</a>
             <a class="btn btn-success btn-lg" href="#" role="button" @click="next">
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
        next: Function
    },
    data() {
        return {
            selectedIndex: null,
            shuffledAnswers: []
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
        currentQuestion() {
            this.selectedIndex = null
            this.shuffleAnswers()
        }
    },
    methods: {
        selectAnswer(index) {
            this.selectedIndex = index
        },
        shuffleAnswers() {
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
        }
    }
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