import {Card, CardContent, CardHeader, CardMedia, IconButton} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {API_URL} from "../../const";
import {useEffect, useState} from "react";
import {deleteBooking} from "../../services/bookingService";

const FeedCardComponent = ({booking, dispatch}) => {
    const navigate = useNavigate();
    const origin = booking.flightOffer.searchCriteria.origin;
    const destination = booking.flightOffer.searchCriteria.destination;
    const bookDate = new Date(booking.dateOfBooking).toDateString();
    const departureDate = new Date(booking.flightOffer.searchCriteria.departureDate).toDateString();
    const priceLabel = `${booking.flightOffer.price.total} ${booking.flightOffer.price.currency}`;
    const [loggedInUser, setLoggedInUser] = useState('')

    const handleClick = () => {
        navigate(`/profile/${booking.user._id}`);
    }

    const deleteBookingHandler = () => {
        deleteBooking(booking._id,dispatch);
    }

    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setLoggedInUser(user);
            }).catch();
    }

    useEffect(getProfile, []);
    return (
        <>
            <Grid item xs={4}>
                <Card sx={{maxWidth: 350, m: 2}}
                >
                    <CardHeader
                        avatar={
                            <Avatar
                                onClick={handleClick}
                                alt="Remy Sharp" src={booking.user.image}/>
                        }
                        action={
                            <IconButton
                                onClick={deleteBookingHandler}
                                aria-label="settings">
                                {loggedInUser.role === 'agent' &&
                                 <DeleteIcon/>
                                }
                            </IconButton>
                        }
                        title={`${booking.user.firstName} ${booking.user.lastName}`}
                        subheader={`Booked on ${bookDate}`}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={`/images/cities/${destination}.jpeg`}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {booking.user.firstName} is travelling to {destination} from {origin}
                            &nbsp; on {departureDate}.
                            <div>
                                He paid only {priceLabel} for this trip.
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
export default FeedCardComponent;