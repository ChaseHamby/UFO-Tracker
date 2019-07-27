    
import axios from 'axios';

const apiUrl = "/api/locationSightings";

const getLocationsWithSightings = () => new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}`)
      .then((results) => {
        const locationFiilteredById = results.data;
        resolve(locationFiilteredById);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default {
    getLocationsWithSightings
}