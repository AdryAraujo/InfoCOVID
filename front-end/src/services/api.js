import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    crossdomain: true,
});

export async function getCities(state) {
    return api.get('/city/' + state);
}

export async function getStates() {
    return api.get('/state/');
}

export async function getCases(dataInicio, dataFim, estado, municipio, campo, maiorQue) {
    return api.get(`/cases?dataInicio=${dataInicio}&dataFim=${dataFim}&estado=${estado}&municipio=${municipio}&campo=${campo}&maiorQue=${maiorQue}`);
}

export async function signin(email, password) {
    return api.post(`/auth/signin`, { email, password })
}

export async function signup(email, password) {
    return api.post(`/auth/signup`, { email, password })
}

export async function saveUserAccessLocation(firebaseUid, latitude, longitude) {
    return api.post(`/access`, { firebaseUid, latitude, longitude })
}