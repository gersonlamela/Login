import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:3001",
});

export const apiWithHeader = axios.create({
  baseURL: "https://localhost:3001",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "Content-Type": "application/json",
  },
});
