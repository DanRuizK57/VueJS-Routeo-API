<template>
  <div>
    <h1>Imágenes de {{ razaPerro }}</h1>
    <div class="contenedor">
        <div v-for="imagen in imagenes" :key="imagen">
            <img :src="imagen" alt="Imagen de Perro">
        </div>
    </div>
  </div>
</template>

<script>
import { obtenerImagenes } from '../services/dog_api.services';
export default {
    name: "ImagenesPage",
    data(){
        return {
            datos: [],
            imagenes: [],
            razaPerro: "",
        }
    },
    async mounted(){
        this.razaPerro = this.$route.params.raza;
      const result = await obtenerImagenes(this.razaPerro);
        this.datos = result;
        this.imagenes = this.datos.message
        console.log(this.imagenes)
    },
}
</script>

<style>
    .contenedor {
        display: flex;
        flex-wrap: wrap;
    }
    img {
        height: 500px;
        width: 500px;
    }
</style>