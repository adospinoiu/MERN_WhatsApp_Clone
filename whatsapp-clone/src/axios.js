import axios from "axios";

const instance = axios.create({
    // For Developmental 
    // baseURL: "http://localhost:9000"

    // For Production or when Deployed
    baseURL: "https://mern-whatsapp-backend-ad.herokuapp.com"
});

export default instance;