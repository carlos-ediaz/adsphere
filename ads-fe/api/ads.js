import http from "./http";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6votnmpzji.execute-api.us-east-1.amazonaws.com",
});

export async function putAd(payload) {
  try {
    console.log(payload);
    const { data: response } = await instance.get("/ads");
    //const { data: response } = await http.get(`/ads`);
    const data = response.body;
    console.log(data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}
