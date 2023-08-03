import './TelaPrincipal.css';
import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logoSemNome.png'
import Filtro from '../components/Filtro';
import InfoCards from '../components/InfoCards';
import InfoTable from '../components/InfoTable';
import {getCases} from '../services/api';

function TelaPrincipal() {
  const [cases, setCases] = useState([]);
  const [percent, setPercent] = useState({});

  async function loadCases(dataInicio, dataFim, selectedState, selectedCity, campo, maiorQue) {
    const response = await getCases(dataInicio, dataFim, selectedState, selectedCity, campo, maiorQue);
    if (response.data) {
      setCases(response.data.data);
      setPercent({...response.data.statistics[0]});
    }
}

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
            <Filtro onSubmit={loadCases}></Filtro>
          </div>
        </div>

        <div className='container-principal'>
          <div className='container-cards'>
            <InfoCards percent={percent}></InfoCards>
          </div>
          <div className='container-table'>
            <InfoTable rows={cases}></InfoTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaPrincipal;
