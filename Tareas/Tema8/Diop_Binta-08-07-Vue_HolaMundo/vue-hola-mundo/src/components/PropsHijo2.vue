<template>
    <h1>{{ cabecera1 }} esta es la cabecera 1</h1>
    <h2>{{ cabecera2 }} esta es la cabecera 2</h2>
    <h3>{{ cabecera3 }} esta es la cabecera 3</h3>
</template>

<script>
    export default {
        props: {
            cabecera1: {type: String, required: true},
            cabecera2: {type: String, required: true},
            cabecera3: {type: String, required: true}
        }
    }
</script>

<style scoped>
    h1 { color: blue }
    h2 { color: red }
    h3 { color: green }
</style>