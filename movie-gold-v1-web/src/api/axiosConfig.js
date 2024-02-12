import axios from 'axios';

export default axios.create({
    baseURL: 'https://de1b-2401-dd00-10-20-a51c-a761-2988-e979.ngrok-free.app',
    headers: { "ngrok-skip-browser-warning": "true" }
});
