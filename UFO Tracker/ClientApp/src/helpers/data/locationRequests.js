    
import axios from 'axios';

const apiUrl = "/api/location";

const getAllLocations = () => new Promise((resolve, reject) => {
  axios.get(apiUrl)
    .then((result) => {
      const locationObject = result.data;
      resolve(locationObject);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSingleLocation = (id) => new Promise((resolve, reject) => {
  axios
    .get(`${apiUrl}/${id}`)
    .then((results) => {
      const locationFiilteredById = results.data;
      resolve(locationFiilteredById);
    })
    .catch((err) => {
      reject(err);
    });
});

const addLocation = (newLocation) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}`, newLocation).then((result) => {
    resolve(result);
  })
    .catch(error => reject(error));
});


export default {
    getAllLocations,
    addLocation,
    getSingleLocation
}