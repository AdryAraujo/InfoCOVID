import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function getCities(state) {
    return api.get('/city/' + state);
}

export async function getStates() {
    return api.get('/state/');
}