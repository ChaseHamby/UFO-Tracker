    
import axios from 'axios';

const apiUrl = "/api/user";

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(apiUrl)
    .then((result) => {
      const userObject = result.data;
      resolve(userObject);
    })
    .catch((error) => {
      reject(error);
    });
});

const addUser = (newUser) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}`, newUser).then((result) => {
    resolve(result);
  })
    .catch(error => reject(error));
});


export default {
    getAllUsers,
    addUser
}