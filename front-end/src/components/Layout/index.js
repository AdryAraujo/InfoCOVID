import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logoSemNome.png';
import './styles.css';
import { useAuth } from '../../contexts/AuthContext';

function Layout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate('/login')
    }

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
                        <Button startIcon={<HomeIcon />} variant='contained' sx={{backgroundColor: 'rgb(61, 152, 155)'}}>
                            Home
                        </Button>
                    </Link>
                    <Link to={'/acessos'}>
                        <Button startIcon={<MapIcon />} variant='contained' sx={{backgroundColor: 'rgb(61, 152, 155)'}}>
                            Mapa de Acessos
                        </Button>
                    </Link>
                    <Button startIcon={<LogoutIcon />} variant='contained' color='error' onClick={handleLogout}>
                        Sair
                    </Button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout