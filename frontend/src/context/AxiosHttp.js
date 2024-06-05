import axios from "axios";
let baseUrl = window.location.origin;
if (window.location.origin === 'http://localhost:3000') {
    baseUrl = 'http://localhost:5001';
}
const AxiosHTTP = axios.create({
    baseURL: baseUrl,
});
export default AxiosHTTP;