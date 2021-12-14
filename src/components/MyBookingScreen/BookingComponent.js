import {API_URL} from "../../const";
import {useEffect, useState} from "react";
import {fetchUserOffers} from "../../services/bookingService";
import {useDispatch, useSelector} from "react-redux";

const BookingComponent = () => {
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
                setTimeout(() => {fetchUserOffers(dispatch,user._id)},3000)
            }).catch();
    }

    useEffect(() => {
        getProfile();
    }, []);
    return(
        <>
            <div>
            User : {JSON.stringify(profile)}
            </div>
            <div>
                {offers.map((offer) => JSON.stringify(offer))}
            </div>
        </>
    )
}

export default BookingComponent