const offers = (state=[], action) => {
    switch (action.type) {
        case 'get-offers-of-user':
            return action.offers;
        default:
            return state;
    }
}

export default offers;