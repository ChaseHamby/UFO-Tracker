    
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

export default {
    getAllLocations
}