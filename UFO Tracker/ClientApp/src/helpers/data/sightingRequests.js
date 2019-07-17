    
import axios from 'axios';

const apiUrl = "/api/sighting";

const getAllSightings = () => new Promise((resolve, reject) => {
  axios.get(apiUrl)
    .then((result) => {
      const sightingObject = result.data;
      resolve(sightingObject);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
    getAllSightings
}