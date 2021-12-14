import {API_URL} from "../const";

const formatDate = (date) => {
    const [formattedDate] = new Date(date).toISOString().split("T");
    return formattedDate;
};
const airlineClasses = new Map()
airlineClasses.set('Economy', 'ECONOMY');
airlineClasses.set('Premium Economy', 'PREMIUM_ECONOMY');
airlineClasses.set('Business', 'BUSINESS');
airlineClasses.set('First Class', 'FIRST');

export const searchFlights = (dispatch, searchCriteria) => {
    const returns = searchCriteria.tripType === 'round-trip';
    const searchCriteriaReq = {
        origin: searchCriteria.origin,
        destination: searchCriteria.destination,
        departureDate: formatDate(
            searchCriteria.departureDate),
        adults: searchCriteria.adults,
        children: searchCriteria.children,
        travelClass: airlineClasses.get(
            searchCriteria.airlineClass),
        ...(returns ? {
            returnDate: formatDate(searchCriteria.returnDate)
        } : {})
    }
    const params = new URLSearchParams(searchCriteriaReq);
    fetch(`${API_URL}/search?${params}`)
        .then(res => fetchAllFlightOffers(dispatch, searchCriteriaReq));
};

export const fetchAllFlightOffers = (dispatch, searchCriteria) => {
    const params = new URLSearchParams(searchCriteria);
    fetch(`${API_URL}/flightOffers?${params}`)
        .then(response => response.json())
        .then(flights =>
                  dispatch({
                               type: 'get-all-flight-offers',
                               flights
                           })
        );
}

export const getFlightOffer = (dispatch, id) => {
    fetch(`${API_URL}/flightOffers/${id}`)
        .then(response => response.json())
        .then(offer =>
                  dispatch({
                               type: 'get-offer',
                               flight : offer
                           }));
}

export const updateFlightOffer = (dispatch, offer) => {
    fetch(`${API_URL}/flightOffers/${offer._id}`, {
        method: 'PUT',
        body: JSON.stringify(offer),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(res =>
                  dispatch({
                               type: 'update-offer',
                               flight: offer
                           }))
}