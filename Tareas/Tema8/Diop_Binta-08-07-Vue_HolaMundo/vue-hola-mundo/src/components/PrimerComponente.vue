<script>
    export default {

        props: {
            nombre: { type: String, required: true},
            apellido: { type: String,required: true }
        },

        data() {
            return {
                subtitulo: 'Soy el subtitulo del componente',
                texto: 'Texto descriptivo'
            }
        }
    }
</script>

<template>
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
    <p>{{ texto }}</p>
    <p>{{ nombre }} {{ apellido }}</p>
</template>

<style scoped>
    h1 { color: green }
    h2 { color: darkgreen }
    p { color: white }
</style>