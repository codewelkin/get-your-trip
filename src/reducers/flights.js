const initialState = {
    flights: []
}

const flights = (state = initialState, action) => {
    switch (action.type) {
        case 'get-all-flight-offers':
            localStorage.setItem("flights", JSON.stringify(action.flights));
            return ({
                flights: action.flights
            })
        case 'set-flight-offers':
            localStorage.setItem("flights", JSON.stringify(action.flights));
            return ({
                flights: action.flights
            })
        case 'update-offer' :
            const flight = {
                ...action.flight
            };
            const flights = [flight, ...state.flights]
            localStorage.setItem("flights", JSON.stringify(flights));
            return ({
                flights: flights
            });
        case 'get-offer' :
            localStorage.setItem("flight", JSON.stringify(action.flight));
            return action.flight
        default:
            return (state);
    }
};

export default flights;