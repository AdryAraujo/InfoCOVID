import React from 'react';
import logo from '../../assets/img/logoSemNome.png';
import Filtro from '../Filtro';
import InfoCards from '../InfoCards';
import InfoTable from '../InfoTable';
import { Outlet } from 'react-router-dom';
import './styles.css';

function Layout() {
    return (
        <div className='container'>
            <div className='cabecalho'>
                <img id="logo" src={logo} alt='Info Covid' />
                <h1>INFO COVID</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout