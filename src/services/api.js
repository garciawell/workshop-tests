import axios from "axios";

export const apiBase = axios.create({
    baseURL: 'https://api.github.com',
  });

const usersAuth = {
  users: ({ method }) => apiBase[method]("users")
};

export default usersAuth;