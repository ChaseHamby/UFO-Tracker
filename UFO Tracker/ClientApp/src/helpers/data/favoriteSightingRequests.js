import axios from 'axios';

const apiUrl = '/api/favoriteSightings';

const createFavoriteSighting = favoriteSighting => axios.post(`${apiUrl}`, favoriteSighting);

const getAllFavoriteSightings = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiUrl}`)
    .then((results) => {
      const favoriteSightings = results.data;
      resolve(favoriteSightings);
    })
    .catch(err => reject(err));
});

const getSingleFavoriteSighting = (sightingId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiUrl}/${sightingId}`)
    .then((results) => {
      const favoriteSighting = results.data;
      resolve(favoriteSighting);
    })
    .catch((err) => {
      reject(err);
    });
});

const deleteFavoriteSighting = (sightingId) => new Promise((resolve, reject) => {
  axios
    .delete(`${apiUrl}/${sightingId}`)
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
    createFavoriteSighting,
    deleteFavoriteSighting,
    getAllFavoriteSightings,
    getSingleFavoriteSighting
};