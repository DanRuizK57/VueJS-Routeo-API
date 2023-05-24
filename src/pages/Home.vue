<template>
  <div>
    <h1>Lista de Perros (Dog API)</h1>
    <div class="contenedor">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Raza de Perro</th>
            <th scope="col">Fotos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(perro, index) in perros" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ perro.key }}</td>
            <td>
              <button @click="mostrarImagenes(perro.key)" class="btn btn-success rounded-pill">Ver Fotos</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { listaPerros } from '../services/dog_api.services';
export default {
    name: "HomePage",
    data(){
      return {
        datos: [],
        perros: [],
        subRazas: [],
      }
    },
    async mounted(){
      const result = await listaPerros();
        this.datos = result;
        this.perros = Object.entries(this.datos.message).map(([key, value]) => ({ key, value }));
    },
    methods: {
        mostrarImagenes(razaPerro) {
            this.$router.push({
                name: "imagenes",
                params: {
                    raza: razaPerro,
                },
            });
        },
    },
}
</script>

<style>
  h1 {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .contenedor {
    display: flex;
    justify-content: center;
  }
  .table {
    width: 60%;
  }
</style>