<template>
  <div>
    <h1>Home</h1>
    <div class="contenedor">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Raza de Perro</th>
            <th scope="col">Imágenes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Raza 1</td>
            <td>
              <button class="btn btn-success rounded-pill">Ver Fotos</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomePage",
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