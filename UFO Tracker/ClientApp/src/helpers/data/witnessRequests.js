import axios from 'axios';

const apiUrl = "/api/witness";

const getAllWitnesses = () => new Promise((resolve, reject) => {
  axios.get(apiUrl)
    .then((result) => {
      const witnessObject = result.data;
      resolve(witnessObject);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
    getAllWitnesses
}