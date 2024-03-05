import axios from "axios";
const AxiosHTTP = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST    
});
export default AxiosHTTP;