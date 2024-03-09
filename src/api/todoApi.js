import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8090";

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res.data;
};

export const getList = async (pageParans) => {
  const { page, size } = pageParans;
  const res = await axios.get(`${prefix}/list`, {
    params: { ...pageParans },
  });
  return res.data;
};

export const addTodo = async (todo) => {
  const res = await axios.post(`${prefix}`, todo);
  return res.data;
};
