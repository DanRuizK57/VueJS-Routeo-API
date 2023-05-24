import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api';

function listaPerros({ limit, offset }) {
  return axios
    .get(`${BASE_URL}/breeds/list/all`, {
      params: {
        limit,
        offset,
      },
    })
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
