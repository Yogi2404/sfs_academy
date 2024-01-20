import axios from "axios";

console.log(process.env.BASE_URL);

const instance = axios.create({
    baseURL: process.env.BASE_URL, 
})


export default instance;