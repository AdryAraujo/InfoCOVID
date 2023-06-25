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

export async function getCases(dataInicio, dataFim, estado, municipio, campo, maiorQue) {
    return api.get(`/cases?dataInicio=${dataInicio}&dataFim=${dataFim}&estado=${estado}&municipio=${municipio}&campo=${campo}&maiorQue=${maiorQue}`);
}