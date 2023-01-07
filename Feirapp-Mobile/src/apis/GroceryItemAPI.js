import axios from "axios";

const APIUrl = "https://d12e-45-187-171-214.sa.ngrok.io/GroceryItem/";

const GroceryItemAPI = {
  getAll: async () => await axios.get(APIUrl),
  getById: async (id) => await axios.get(`${APIUrl}${id}`),
  getName: async (name) => await axios.get(`${APIUrl}Name/${name}`),
  getRandom: async (quantity) => await axios.get(`${APIUrl}Random/${quantity}`),
  update: async (groceryItem) => await axios.put(APIUrl, groceryItem),
  create: async (groceryItem) => await axios.post(APIUrl, groceryItem),
  delete: async (groceryId) =>
    await axios.delete(`${APIUrl}?groceryId=${groceryId}`),
};

export default GroceryItemAPI;
