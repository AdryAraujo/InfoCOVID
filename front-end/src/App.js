import './App.css';
import React, { useEffect, useState } from 'react';
import logo from '../src/assets/img/logoSemNome.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormLabel, TextField } from '@mui/material';
import { getCities, getStates } from './services/api';

function createData(uf,
  cod_IBGE,
  municipio,
  data_de_coleta,
  tipo_de_local,
  confirm_acum,
  confirmados_acum_100k_hab,
  confirm_dia,
  semana_epidem,
  obitos_acum,
  obitos_dia,
  obitos_por_conf,
  pop_esti_2019,
  ultima_atuali,
  dado_repetido,
  popu_estimada,
  data_ref,
  num_atuali) {
  return {
    uf,
    cod_IBGE,
    municipio,
    data_de_coleta,
    tipo_de_local,
    confirm_acum,
    confirmados_acum_100k_hab,
    confirm_dia,
    semana_epidem,
    obitos_acum,
    obitos_dia,
    obitos_por_conf,
    pop_esti_2019,
    ultima_atuali,
    dado_repetido,
    popu_estimada,
    data_ref,
    num_atuali
  };
}

const rows = [
  createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
  createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
  createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,),
  createData('SE', 2800308, "Aracaju", "2020-04-02T03:00:00.000Z", "city", 20, 3, "20", "202014", 2, 2, "0.1", 657013, 0, 0, 0, 664908, "2020-04-02T03:00:00.000Z", 20,)
];

function App() {
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
    <div className='container'>
      <div className='cabecalho'>
        <img id="logo" src={logo} alt='Info Covid' />
        <h1>INFO COVID</h1>
      </div>
      <div className='container-dados'>
        <div className='container-lateral'>
          <div className='container-lateral-titulo'>
            <h2>Refine sua busca aqui!</h2>
          </div>
          <div className='filtros'>
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
          </div>
        </div>

        <div className='container2'>
          <div className='container-inf'>
            <Card
              sx={{
                width: '150px',
                height: '100px',
                marginRight: '20px',
                backgroundColor: '#3D989B',
                color: 'white'
              }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                  Óbitos acumulados p/ população (%)
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: '170px',
                height: '100px',
                marginRight: '20px',
                backgroundColor: '#3D989B',
                color: 'white'
              }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                  Óbitos acumulados p/ casos confirmados (%)
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: '150px',
                height: '100px',
                marginRight: '20px',
                backgroundColor: '#3D989B',
                color: 'white'
              }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                  Casos acumulados p/ população (%)
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: '150px',
                height: '100px',
                marginRight: '20px',
                backgroundColor: '#3D989B',
                color: 'white'
              }}>
              <CardContent>
                <Typography fontSize={13} textAlign={'justify'}>
                  Casos acumulados p/ 1000hab
                </Typography>
                <Typography fontSize={15} >
                  <b>30.000</b>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='container-table'>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>UF</TableCell>
                    <TableCell align="right">Cod. IBGE</TableCell>
                    <TableCell align="right">Município</TableCell>
                    <TableCell align="right">Data de coleta</TableCell>
                    <TableCell align="right">Tipo de local</TableCell>
                    <TableCell align="right">Confirmados acumulado</TableCell>
                    <TableCell align="right">Confirmados no dia</TableCell>
                    <TableCell align="right">Confirmados acumulado/100k de hab.</TableCell>
                    <TableCell align="right">Semana epidemológica</TableCell>
                    <TableCell align="right">Óbitos acumulados</TableCell>
                    <TableCell align="right">Óbitos no dia</TableCell>
                    <TableCell align="right">Óbitos/Confirmados</TableCell>
                    <TableCell align="right">População estimada 2019</TableCell>
                    <TableCell align="right">Última atualização</TableCell>
                    <TableCell align="right">Dado repetido</TableCell>
                    <TableCell align="right">População estimada</TableCell>
                    <TableCell align="right">Data referência</TableCell>
                    <TableCell align="right">Número da atualização</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.uf}
                      </TableCell>
                      <TableCell align="right">{row.cod_IBGE}</TableCell>
                      <TableCell align="right">{row.municipio}</TableCell>
                      <TableCell align="right">{row.data_de_coleta}</TableCell>
                      <TableCell align="right">{row.tipo_de_local}</TableCell>
                      <TableCell align="right">{row.confirm_acum}</TableCell>
                      <TableCell align="right">{row.confirm_dia}</TableCell>
                      <TableCell align="right">{row.confirmados_acum_100k_hab}</TableCell>
                      <TableCell align="right">{row.semana_epidem}</TableCell>
                      <TableCell align="right">{row.obitos_acum}</TableCell>
                      <TableCell align="right">{row.obitos_dia}</TableCell>
                      <TableCell align="right">{row.obitos_por_conf}</TableCell>
                      <TableCell align="right">{row.pop_esti_2019}</TableCell>
                      <TableCell align="right">{row.ultima_atuali}</TableCell>
                      <TableCell align="right">{row.dado_repetido}</TableCell>
                      <TableCell align="right">{row.popu_estimada}</TableCell>
                      <TableCell align="right">{row.data_ref}</TableCell>
                      <TableCell align="right">{row.num_atuali}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
