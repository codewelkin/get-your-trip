import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {CircularProgress, Fab, ListItemAvatar} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SegmentComponent from "./SegmentComponent";
import {useNavigate} from 'react-router-dom';
import {getFlightOffer} from "../../services/flightService";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {API_URL} from "../../const";

const SearchListItem = ({offer,dispatch}) => {
    const priceLabel = `${offer.price.total} ${offer.price.currency}`;
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const [profile, setProfile] = useState('')
    const [login, setLogin] = useState(false)

    const fetchOffer = () => {
        if(!login){
            navigate('/login');
        }
        else {
            setLoader(true);
            getFlightOffer(dispatch, offer._id);
            setTimeout(() => {
                setLoader(false);
                navigate(`/details/${offer._id}`);
            },2000);
        }
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
        <ListItem sx={{border: 1, borderColor: 'grey.500', mt: 2, borderRadius: 4}}>
            <ListItemAvatar>
                <Avatar sx={{resize: 40}}
                        alt="logo" src="/images/logos/DL.png"/>
                {/*<FlightTakeoffIcon/>*/}
                {/*</Avatar>*/}
            </ListItemAvatar>

            {offer.itineraries.map((itinerary, index) => {
                                       return <SegmentComponent itinerary={itinerary} index={index}/>
                                   }
            )}
            <ListItemText
                primary="Available Seats"
                secondary={offer.numberOfBookableSeats}
            />
            <ListItemText
                primary="Price"
                secondary={priceLabel}
            />
            {!loader &&
             <Button onClick={fetchOffer}>
                 <Fab
                     color="primary" variant="extended">
                     Select
                     <ArrowRightIcon sx={{ml: 1}}/>
                 </Fab>
             </Button>
            }
            {loader &&
             <CircularProgress color='primary'/>
            }

        </ListItem>
    )
        ;
};

export default SearchListItem;