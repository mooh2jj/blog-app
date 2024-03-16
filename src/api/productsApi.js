import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8090";

const host = `${API_SERVER_HOST}/api/products`;

export const addProduct = async (product) => {
  const haeder = { headers: { "Content-Type": "multipart/form-data" } };

  const res = await axios.post(`${host}`, product, haeder);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  const res = await axios.get(`${host}/list`, {
    params: { page: page, size: size },
  });

  return res.data;
};

export const getOne = async (pno) => {
  const res = await axios.get(`${host}/${pno}`);
  return res.data;
};
