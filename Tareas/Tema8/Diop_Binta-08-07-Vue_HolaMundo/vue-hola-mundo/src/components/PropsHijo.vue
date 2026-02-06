<template>
    <div>
        <p id="n">Mi nombre es {{ nombre }}</p>
        <p id="ed">Mi edad es {{ edad }} años</p>
        <p id="es">Soy {{ estado }}</p>
        <p id="pr">Trabajo en el programa {{ programa }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            nombre: { type: String, required: true},
            edad: { type: Number,required: true },
            estado: { type: String, required: true },
            programa: { type: String, required: true }
        }
    }
</script>


<style scoped>
    #n { color: red }
    #ed { color: cyan }
    #es { color: orange }
    #pr { color: crimson }
</style>