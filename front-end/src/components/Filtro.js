import { Button, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { getCities, getStates } from '../services/api';


function Filtro({onSubmit}) {
    const [campo, setCampo] = useState('');
    const [maiorQue, setMaiorQue] = useState(0);
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
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
    return (
        <>
            <FormControl fullWidth>
                <FormLabel id='data-inicio' sx={{ color: 'white' }} >Data Início:</FormLabel>
                <TextField
                    sx={{
                        backgroundColor: "white",
                        color: "#0E4364",
                        marginBottom: "20px",
                        borderRadius: '4px'
                    }}
                    id="dataInicio"
                    fullWidth
                    aria-labelledby='data-inicio'
                    type='date'
                    onChange={(e) => setDataInicio(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth>
                <FormLabel id='data-fim' sx={{ color: 'white' }} >Data Fim:</FormLabel>
                <TextField
                    sx={{
                        backgroundColor: "white",
                        color: "#0E4364",
                        marginBottom: "20px",
                        borderRadius: '4px'
                    }}
                    id="dataFim"
                    fullWidth
                    aria-labelledby='data-fim'
                    type='date'
                    onChange={(e) => setDataFim(e.target.value)}
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
            <FormControl fullWidth >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputLabel id="input-campo">Campo</InputLabel>
                    <Select fullWidth
                        sx={{
                            backgroundColor: "white"
                        }}
                        labelId="select-campo"
                        id="Campo"
                        label="Campo"
                        onChange={(e) => setCampo(e.target.value)}

                    >
                        <MenuItem value={'obitos_acum'}>Óbitos acumulados</MenuItem>
                        <MenuItem value={'obitos_no_dia'}>Óbitos no dia</MenuItem>
                        <MenuItem value={'numero_atualizacao'}>Quantidade de atualizações</MenuItem>
                    </Select>
                    <span style={{marginInline: '2px', color: 'white'}}>{">"}</span>
                    <TextField fullWidth id="outlined-basic" label="Valor" variant="outlined" type={'number'} onChange={(e) => setMaiorQue(e.target.value)}  sx={{backgroundColor: 'white', borderRadius: '4px'}}/>
                </div>
            </FormControl>
            <Button fullWidth variant='contained' sx={{backgroundColor: '#3D989B', margin: '18px auto'}} onClick={(e) => onSubmit(dataInicio, dataFim, selectedState, selectedCity, campo, maiorQue)}>Filtrar</Button>
        </>
    );
}

export default Filtro;
