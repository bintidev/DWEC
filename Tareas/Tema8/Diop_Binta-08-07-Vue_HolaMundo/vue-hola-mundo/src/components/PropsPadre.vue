<template>
    <PropsHijo nombre="Jordi Hurtado" edad=109 estado="inmortal" programa="Saber y Ganar" /> <br>
    <PropsHijo2 cabecera1="Cabecera1" cabecera2="Cabecera2" cabecera3="Cabecera3"/>
</template>

<script>
    import PropsHijo from './PropsHijo.vue'
    import PropsHijo2 from './PropsHijo2.vue'
    export default { components: { PropsHijo, PropsHijo2 } }
</script>

<style>

</style>