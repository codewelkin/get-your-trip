import * as React from 'react';
import Box from '@mui/material/Box';
import {Link as RouterLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import '../css/style.css'

const rightLink = {
    fontSize: 15,
    color: 'common.white',
    ml: 3,
};

const NavBar = () => {
    return (
        <div>
            <AppBar position="fixed" style={{background:"transparent", boxShadow: 'none'}}>
                <Toolbar sx={{justifyContent: 'space-between', ml:4, mr:4}}>
                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        mt : 2
                    }}>
                        <Link
                            color="inherit"
                            component={RouterLink} to='/'>
                            <img className={"ms-2 gyt-logo-navbar"} src={"./gyt-logos/Getyourtrip-new-250.png"}
                                 alt="logo"/>
                        </Link>
                    </Box>
                    <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            variant="h6"
                            underline="none"
                            sx={rightLink}
                            to='/login'
                        >
                            {'Log In'}
                        </Link>
                        <Link
                            component={RouterLink}
                            variant="h6"
                            underline="none"
                            sx={{...rightLink, color: 'secondary.main'}}
                            to='/'
                        >
                            {'Sign Up'}
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}

export default NavBar;
