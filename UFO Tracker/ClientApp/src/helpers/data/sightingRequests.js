    
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

const getAllSightingsWithLatLong = () => new Promise((resolve, reject) => {
    axios.get(`${apiUrl}/locationSightings`)
    .then((result) => {
      const sightingObject = result.data;
      resolve(sightingObject);
    })
    .catch((error) => {
      reject(error);
    });
});

const addSighting = (newSightingObject) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}`, newSightingObject).then((result) => {
    resolve(result);
  })
    .catch(error => reject(error));
});

export default {
    getAllSightings,
    getAllSightingsWithLatLong,
    addSighting
}