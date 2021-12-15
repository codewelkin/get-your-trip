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

export const fetchAllBookings = (dispatch) => {
    fetch(`${API_URL}/bookings`)
        .then(res=>res.json())
        .then(bookings =>
        dispatch({
            type : "get-all-bookings",
            bookings
                 })
        )
}

export const deleteBooking = (id, dispatch) => {
    fetch(`${API_URL}/bookings/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    })
        .then(res=>res.json())
        .then(status =>
        dispatch({
            type:'delete-booking',
            id
                 })
        )
}