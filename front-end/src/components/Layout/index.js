import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import { Button } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/img/logoSemNome.png';
import './styles.css';

function Layout() {
    return (
        <div className='container'>
            <div className='cabecalho'>
                <Link to={'/'}>
                    <div className="cabecalho-logo">
                        <img id="logo" src={logo} alt='Info Covid' />
                        <h1>INFO COVID</h1>
                    </div>
                </Link>

                <div className="cabecalho-links">
                    <Link to={'/'}>
                        <Button startIcon={<HomeIcon />} variant='contained'>
                            Home
                        </Button>
                    </Link>
                    <Link to={'/acessos'}>
                        <Button startIcon={<MapIcon />} variant='contained'>
                            Mapa de Acessos
                        </Button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout