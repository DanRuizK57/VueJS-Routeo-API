import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api';

function listaPerros() {
  return axios
    .get(`${BASE_URL}/breeds/list/all`)
    .then((result) => {
      return result.data;
    });
}

function obtenerImagenes(raza) {
  return axios
    .get(`${BASE_URL}/breed/${raza}/images`)
    .then((result) => {
      return result.data;
    });
}

export { listaPerros, obtenerImagenes };
