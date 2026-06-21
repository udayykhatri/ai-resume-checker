import axios from "axios";

const instance = axios.create({
    baseURL: "https://ai-resume-checker-api.onrender.com",
});

export default instance;
