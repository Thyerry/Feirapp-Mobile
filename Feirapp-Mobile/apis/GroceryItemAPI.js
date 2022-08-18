import axios from "axios";

const APIUrl = "https://b7b3-45-187-171-174.sa.ngrok.io/GroceryItem/";

export default GroceryItemAPI = {
  getAll: async () => await axios.get(APIUrl),
  getById: async (id) => await axios.get(`${APIUrl}${id}`),
  getName: async (name) => await axios.get(`${APIUrl}Name/${name}`),
  update: async (groceryItem) => await axios.put(APIUrl, groceryItem),
  create: async (groceryItem) => await axios.post(APIUrl, groceryItem),
  delete: async (groceryId) => await axios.delete(`${APIUrl}?groceryId=${groceryId}`),
};
