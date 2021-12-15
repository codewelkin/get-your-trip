const bookings = (state=[], action) => {
    switch (action.type) {
        case 'get-all-bookings':
            return action.bookings;
        case 'delete-booking':
            return state.filter(booking=>booking._id !== action.id)
        default:
            return state;
    }
}

export default bookings;