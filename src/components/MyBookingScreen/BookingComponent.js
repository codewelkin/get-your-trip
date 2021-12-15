import {API_URL} from "../../const";
import {useEffect, useState} from "react";
import {fetchUserOffers} from "../../services/bookingService";
import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import UserManagementListItem from "../UserManagementScreen/UserManagementListItem";
import List from "@mui/material/List";
import BookingComponentListItem from "./BookingComponentListItem";
import {useParams} from "react-router-dom";

const BookingComponent = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const offers = useSelector((state) => state.offers);
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

    useEffect(() => {
        fetchUserOffers(dispatch, id);
        getProfile();
    }, []);
    return (
        <>
            {offers &&
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

                 <List>
                     {offers.map((offer) => {
                                     return <BookingComponentListItem offer={offer} dispatch={dispatch}
                                                                      id={id}
                                                                      key={offer}/>
                                 }
                     )}
                 </List>
                 </Container>
             </Box>
            }
        </>
    )
}

export default BookingComponent