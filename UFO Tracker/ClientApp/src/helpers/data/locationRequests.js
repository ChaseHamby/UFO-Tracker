    
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

const getSingleLocation = (locationId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiUrl}/${locationId}`)
    .then((results) => {
      const locationFiilteredById = results.data;
      resolve(locationFiilteredById);
    })
    .catch((err) => {
      reject(err);
    });
});

const addLocation = (newLocationObject) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}/`, newLocationObject).then((result) => {
    resolve(result);
  })
    .catch(error => reject(error));
});


export default {
    getAllLocations,
    addLocation,
    getSingleLocation
}