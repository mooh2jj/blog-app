import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8090";

const prefix = `${API_SERVER_HOST}/api/products`;

export const addProduct = async (product) => {
  const haeder = { headers: { "Content-Type": "multipart/form-data" } };

  const res = await axios.post(`${prefix}`, product, haeder);
  return res.data;
};
