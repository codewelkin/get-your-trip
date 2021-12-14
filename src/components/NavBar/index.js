import * as React from 'react';
import Box from '@mui/material/Box';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import '../css/style.css'
import {API_URL} from "../../const";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const rightLink = {
    fontSize: 15,
    color: 'common.white',
    ml: 3,
};

const NavBar = ({
                    page = '',
                }) => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState('')
    const [login, setLogin] = useState(false)
    const navigate = useNavigate();
    const logout = () => {
        fetch(`${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => {
            dispatch({
                type: 'get-offers-of-user',
                offers : []
                     })
            setLogin(false);
            navigate('/')
        });
    }

    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setLogin(true);
                setProfile(user);
            }).catch();
    }

    useEffect(getProfile, []);
    return (
        <div>
            <AppBar position="fixed" style={{
                background: `${page === 'search' || page === 'flightDetails' ? 'white'
                                                                             : 'transparent'}`,
                boxShadow: 'none'
            }}>
                <Toolbar sx={{justifyContent: 'space-between', ml: 4, mr: 4}}>
                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}>
                        <Link
                            color="inherit"
                            component={RouterLink} to='/'>
                            {page === 'home' ?
                             <img className={"ms-2 gyt-logo-navbar"}
                                  src={"/gyt-logos/Getyourtrip_db.png"}
                                  alt="logo"/> :
                             <img className={"ms-2 gyt-logo-navbar"}
                                  src={"/gyt-logos/Getyourtrip_lb.png"}
                                  alt="logo"/>}
                        </Link>
                    </Box>
                    <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        {login === true && page !== 'booking' &&
                         <Link
                             component={RouterLink}
                             color="inherit"
                             variant="h6"
                             underline="none"
                             sx={{
                                 ...rightLink,
                                 color: `${page === 'home' ? 'primary.light' : 'secondary.main'}`
                             }}
                             to='/bookings'
                         >
                             {'My Bookings'}
                         </Link>}
                        {(page === 'booking' || page === 'login' || page === 'signup') &&
                         <Link
                             component={RouterLink}
                             color="inherit"
                             variant="h6"
                             underline="none"
                             sx={{
                                 ...rightLink,
                                 color: `${page === 'home' ? 'primary.light' : 'secondary.main'}`
                             }}
                             to='/'
                         >
                             {'Home'}
                         </Link>}
                        {login === true &&
                         <Link
                             onClick={logout}
                             variant="h6"
                             underline="none"
                             sx={{...rightLink, color: 'primary.main'}}
                         >
                             {'Logout'}
                         </Link>}


                        {login === false && page !== 'login' &&
                         <Link
                             component={RouterLink}
                             color="inherit"
                             variant="h6"
                             underline="none"
                             sx={{
                                 ...rightLink,
                                 color: `${page === 'home' ? 'primary.light' : (page === 'signup'
                                                                                ? 'primary.main'
                                                                                : 'secondary.main')}`
                             }}
                             to='/login'
                         >
                             {'Log In'}
                         </Link>}
                        {login === false && page !== 'signup' &&
                         <Link
                             component={RouterLink}
                             variant="h6"
                             underline="none"
                             sx={{...rightLink, color: 'primary.main'}}
                             to='/signup'
                         >
                             {'Sign Up'}
                         </Link>}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}

export default NavBar;
