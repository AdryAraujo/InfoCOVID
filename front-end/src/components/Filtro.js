import React, { useEffect, useState } from 'react';
import { FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { getCities, getStates } from '../services/api';


function Filtro(){
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    async function loadStates() {
        const response = await getStates();
        if (response.data) {
        setStates(response.data);
        }
    }

    async function loadCities() {
        if (!selectedState) {
        return;
        }

        const response = await getCities(selectedState);
        if (response.data) {
        const cities = response.data.filter((city) => city.municipio !== null);
        setCities(cities);
        setSelectedCity('');
        }
    }

    useEffect(() => {
        loadStates();
    }, []);

    useEffect(() => {
        loadCities();
    }, [selectedState]);
    return(
        <>
            <FormControl fullWidth>
                <FormLabel id='data-inicio' sx={{ color: 'white' }} >Data Início:</FormLabel>
                <TextField
                    sx={{
                    backgroundColor: "white",
                    color: "#0E4364",
                    marginBottom: "20px"
                    }}
                    id="dataInicio"
                    fullWidth
                    aria-labelledby='data-inicio'
                    type='date'
                />
            </FormControl>
            <FormControl fullWidth>
                <FormLabel id='data-fim' sx={{ color: 'white' }} >Data Fim:</FormLabel>
                <TextField
                    sx={{
                    backgroundColor: "white",
                    color: "#0E4364",
                    marginBottom: "20px"
                    }}
                    id="dataFim"
                    fullWidth
                    aria-labelledby='data-fim'
                    type='date'
                />
            </FormControl>
            <FormControl fullWidth >
                <InputLabel id="input-estados">Estados</InputLabel>
                <Select
                    value={selectedState}
                    sx={{
                    backgroundColor: "white",
                    color: "#0E4364",
                    marginBottom: "20px"
                    }}
                    labelId="select-estados"
                    id="estados"
                    label="Estados"
                    placeholder='Selecione um estado'
                    onChange={(e) => setSelectedState(e.target.value)}
                >
                    {states.map(state => (
                    <MenuItem value={state['UF']}>{state['UF']}</MenuItem>
                    ))}
                </Select>
            </FormControl>
                <FormControl fullWidth >
                <InputLabel id="input-municipios">Municípios</InputLabel>
                <Select
                    value={selectedCity}
                    sx={{
                    backgroundColor: "white",
                    color: "#0E4364",
                    marginBottom: "20px"
                    }}
                    labelId="select-municipios"
                    id="municipios"
                    label="Municípios"
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                    {cities.map(city => (
                    <MenuItem value={city.municipio}>{city.municipio}</MenuItem>
                    ))}
                </Select>
                </FormControl>
        </>
    );
}

export default Filtro;
