<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link disabled"><b>Fancy Quiz App</b></a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" disabled>Counter: {{ numCorrect }}/{{ numTotal }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'numCorrect',
        'numTotal'
    ]
}
</script>