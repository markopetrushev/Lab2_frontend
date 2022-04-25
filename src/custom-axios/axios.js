import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mysterious-citadel-07163.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;