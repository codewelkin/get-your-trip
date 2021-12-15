import {Card, CardActionArea, CardContent, CardMedia, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {deleteBooking} from "../../services/bookingService";
import {useNavigate} from "react-router-dom";

const BookingComponentListItem = ({offer, dispatch,id}) => {
    const navigate = useNavigate();
    const origin = offer.flightOffer.searchCriteria.origin;
    const destination = offer.flightOffer.searchCriteria.destination;
    const departureDate = new Date(offer.flightOffer.searchCriteria.departureDate).toDateString();
    const priceLabel = `${offer.flightOffer.price.total} ${offer.flightOffer.price.currency}`;

    const handleCancelBooking = () => {
        deleteBooking(offer._id,dispatch)
    }
    return(
        <>
            <ListItem>
                <CardActionArea component="a">
                    <Card sx={{display: 'flex'}}>
                        <CardMedia
                            component="img"
                            sx={{width: 200, height: 200, display: {xs: 'none', sm: 'block'}}}
                            image={`/images/cities/${destination}.jpeg`}
                            alt="some-text"
                        />
                        <CardContent sx={{flex: 1, width:700}}>
                            <Typography variant="h3" gutterBottom component="div">
                                {origin} <ArrowRightAltIcon
                            fontSize={"large"}
                            /> {destination}
                            </Typography>
                             <Typography variant="subtitle1" color="text.secondary">
                                 Departure Date : {departureDate}
                             </Typography>
                            <Typography variant="subtitle1">
                                Total Price : {priceLabel}
                            </Typography>
                             <Link onClick={handleCancelBooking}>
                                 <Typography variant="subtitle1" color="primary">
                                     Cancel Booking
                                 </Typography>
                             </Link>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </ListItem>
        </>
    )
}

export default BookingComponentListItem;