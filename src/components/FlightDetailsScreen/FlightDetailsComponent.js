import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import FlightDetailsSegmentComponent from "./FlightDetailsSegmentComponent";
import Container from "@mui/material/Container";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Fab} from "@mui/material";
import Link from "@mui/material/Link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {API_URL} from "../../const";
import {useEffect, useState} from "react";
import {createBooking} from "../../services/bookingService";

const FlightDetailsComponent = ({offerId}) => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState('')
    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setProfile(user);
            }).catch();
    }

    const bookFlightHandler = () => {
        createBooking(profile._id, offerId);
        setTimeout(() => {
            navigate(`/bookings/${profile._id}`);
        },2000);
    }

    const flight = JSON.parse(localStorage.getItem("flight"));
    useEffect(getProfile, []);
    return (
        <>
            <Box
                component="section"
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    backgroundColor: 'primary.light',
                    mt: 6,
                    ml: 16,
                    mr: 16,
                    borderRadius: '20px'
                }}
            >
                <Container
                    sx={{
                        mt: 2,
                        mb: 2,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" component="div" color={'primary'} gutterBottom>
                        Flight Details : {flight && flight._id}
                    </Typography>
                    <Typography variant="subtitle1" component="div" color={'primary'}>
                    </Typography>
                    {flight && flight.itineraries.map((itinerary, index) => {
                                                          return <FlightDetailsSegmentComponent itinerary={itinerary} index={index}/>
                                                      }
                    )}
                    <Box
                        sx={{display: 'flex'}}
                    >
                        <Link
                            to="/search"
                            component={RouterLink}
                        >
                            <Fab
                                sx={{m: 2}}
                                color="primary" variant="extended">
                                <ArrowBackIcon sx={{mr: 1}}/>
                                Go Back
                            </Fab>
                        </Link>
                        <Fab
                            sx={{m: 2}}
                            onClick={bookFlightHandler}
                            variant="extended"
                            color="primary">
                            Book
                        </Fab>
                    </Box>
                </Container>
            </Box>
        </>
    )
};

export default FlightDetailsComponent;