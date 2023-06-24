import './App.css';
import * as React from 'react';
import logo from '../src/assets/img/logoSemNome.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {
  return (
    <div className='container'>
      <div className='cabecalho'>
        <img id="logo" src={logo} alt='Info Covid'/>
        <h1>INFO COVID</h1>
      </div>

      <div className='container-lateral'>
        <div className='container-lateral-titulo'>
          <h2>Refine sua busca aqui!</h2>
        </div>
        <div className='filtros'>
          <FormControl fullWidth >
            <InputLabel id="input-municipios">Municípios</InputLabel>
            <Select
              labelId="select-municipios"
              id="municipios"
              label="Municípios"
            >
              <MenuItem >Ten</MenuItem>
              <MenuItem >Twenty</MenuItem>
              <MenuItem >Thirty</MenuItem>

            </Select>
            <InputLabel id="input-municipio">Município</InputLabel>
            <Select fullWidth
              labelId="select-municipio"
              id="municipio"
              label="Município"
            >
              <MenuItem >Ten</MenuItem>
              <MenuItem >Twenty</MenuItem>
              <MenuItem >Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className='container-table'>

      </div>

    </div>
  );
}

export default App;
