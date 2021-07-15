import axios from "axios";

const basePath = 'http://localhost:8080';

const LocalHostMap =  axios.create({
    baseURL: basePath,
});

export default LocalHostMap;