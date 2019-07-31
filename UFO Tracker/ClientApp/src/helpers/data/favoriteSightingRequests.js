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

const deleteFavoriteSighting = favoriteSightingId => axios.delete(`${apiUrl}/${favoriteSightingId}`);

export default {
    createFavoriteSighting,
    deleteFavoriteSighting,
    getAllFavoriteSightings
};