<template>
    <div>
        <div class="jumbotron">
            <p class="lead">
                {{ currentQuestion.question }}
            </p>
            <hr class="my-4">
            <p>
                List of answers
            </p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Submit</a>
             <a class="btn btn-success btn-lg" href="#" role="button" @click="next">
                 Next
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentQuestion: Object,
        next: Function
    },
}
</script>