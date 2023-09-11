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
        <div className='container-total'>
            <header>
                <nav class="navbar navbar-expand-sm navbar-dark shadow-sm nav-custom">
                    {/* Logo */}
                    <a href="index.html" class="navbar-brand text-white">
                        <img className='d-inline-block align-center' src={logo} alt="logo" width="90" height="60" />
                        <strong> &nbsp;INFO COVID</strong>
                    </a>

                    {/* Menu hamburguer */}
                    <button class="navbar-toggler text-white" data-toggle="collapse" data-target="#navbarHeader">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>

                    {/* Navegação */}
                    <div class="collapse navbar-collapse" id="navbarHeader">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item"> <Link to={'/'} class="text-white nav-link">Home</Link></li>
                            <li class="nav-item"><Link to={'/acessos'} class="nav-link text-white"> Mapa de Acessos</Link></li>
                            <li class="nav-item"><a href="" class="nav-link text-white" onClick={handleLogout}>Sair</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
        
        // <div className='container-total'>
        //     <div className='cabecalho'>
        //         <Link to={'/'}>
        //             <div className="cabecalho-logo">
        //                 <img id="logo" src={logo} alt='Info Covid' />
        //                 <h1>INFO COVID</h1>
        //             </div>
        //         </Link>

        //         <div className="cabecalho-links">
        //             <Link to={'/'}>
        //                 <Button startIcon={<HomeIcon />} variant='contained' sx={{backgroundColor: 'rgb(61, 152, 155)'}}>
        //                     Home
        //                 </Button>
        //             </Link>
        //             <Link to={'/acessos'}>
        //                 <Button startIcon={<MapIcon />} variant='contained' sx={{backgroundColor: 'rgb(61, 152, 155)'}}>
        //                     Mapa de Acessos
        //                 </Button>
        //             </Link>
        //             <Button startIcon={<LogoutIcon />} variant='contained' color='error' onClick={handleLogout}>
        //                 Sair
        //             </Button>
        //         </div>
        //     </div>
        //     <Outlet />
        // </div>
    )
}

export default Layout