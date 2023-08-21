import React, { useEffect } from 'react'
import './styles.css'
import logo from '../../assets/img/logoSemNome.png'
import Filtro from '../../components/Filtro';
import InfoCards from '../../components/InfoCards';
import InfoTable from '../../components/InfoTable';
import { getCases, saveUserAccessLocation } from '../../services/api';
import { useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import useUserLocation from '../../hooks/useUserLocation';

function Home() {
    const { user } = useAuth()
    const { location } = useUserLocation();
    const [cases, setCases] = useState([]);
    const [percent, setPercent] = useState({});

    console.log('User Location:', location)

    useEffect(() => {
        async function saveUserAccess() {
            try {
                if (!location) return;
                const { latitude, longitude } = location;
                await saveUserAccessLocation(user.uid, latitude, longitude)
            } catch (error) {
                console.error('Error saving user access location:', error)
            }
        }

        saveUserAccess()
    }, [location])

    async function loadCases(dataInicio, dataFim, selectedState, selectedCity, campo, maiorQue) {
        const response = await getCases(dataInicio, dataFim, selectedState, selectedCity, campo, maiorQue);
        if (response.data) {
            setCases(response.data.data);
            setPercent({ ...response.data.statistics[0] });
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
    )
}

export default Home