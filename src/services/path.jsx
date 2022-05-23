import axios from 'axios';

const path = axios.create({
    baseURL: './data.json'
});

export default path;