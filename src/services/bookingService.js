import {API_URL} from "../const";

export const createBooking = (userId, offerId) => {
    fetch(`${API_URL}/createBooking/${userId}/${offerId}`,{
        method: 'POST',
        credentials: 'include'
    }).then(res => res.json())
}

export const fetchUserOffers = (dispatch, userId) => {
    fetch(`${API_URL}/bookings/offers/${userId}`)
        .then(res => res.json())
        .then(offers =>
            dispatch({
                type : 'get-offers-of-user',
                offers
                     })
        )
}