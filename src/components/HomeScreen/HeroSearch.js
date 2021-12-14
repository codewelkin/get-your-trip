import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeroLayout from './HeroLayout';
import {Link as RouterLink} from "react-router-dom";
import Link from "@mui/material/Link";

const backgroundImage ='./images/airlineHero4.jpeg';

const HeroSearch = () => {
    return (
        <HeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Book your next flight now!
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                Enjoy secret offers up to 30% off on your first flight booking.
            </Typography>
            <Button
                component={RouterLink}
                to='/search'
                color="primary"
                variant="contained"
                size="large"
                sx={{ minWidth: 200, height: 60}}
            >
                search flights
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
            <Typography
            sx={{position : 'absolute', bottom:12}}
                variant="body2" color="inherit" align="center">
                {'Copyright © '}
                <Link color="inherit"
                      component={RouterLink} to='/'>
                    getyourtrip
                </Link>{' '}
                {new Date().getFullYear()}
                {'  .  '}
                <Link color="inherit"
                      component={RouterLink} to='/privacy'>
                    Privacy Policy
                </Link>{' '}
            </Typography>
        </HeroLayout>
    );
}

export default HeroSearch;