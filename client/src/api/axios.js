import axios from 'axios';
export const Axios = axios.create({
    baseURL: 'http://localhost:3001/api/',
    headers: {
        'content-type': 'application/json'
    }
});
export const get = async(path)=>{
    const respone = await Axios.get(path)
    return respone.data
}