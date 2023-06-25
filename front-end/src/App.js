import './App.css';
import React, { useEffect, useState } from 'react';
import logo from './assets/img/logoSemNome.png'
import Filtro from './components/Filtro';
import InfoCards from './components/InfoCards';
import InfoTable from './components/InfoTable';


function App() {
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
          <div className='container-filtros'>
            <Filtro></Filtro>
          </div>
        </div>

        <div className='container-principal'>
          <div className='container-cards'>
            <InfoCards></InfoCards>
          </div>
          <div className='container-table'>
            <InfoTable></InfoTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
