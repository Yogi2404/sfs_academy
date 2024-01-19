import axios from "axios";

const instance = axios.create({
    baseURL: 'https://sfs-academy-server.onrender.com/api', 
})


export default instance;