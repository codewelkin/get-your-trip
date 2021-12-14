import NavBar from "../NavBar";
import FlightDetailsComponent from "./FlightDetailsComponent";
import {useParams} from "react-router-dom";

const FlightDetailsScreen = () => {
    const {id} = useParams();
    return(
        <>
            <NavBar page={'flightDetails'}/>
            <FlightDetailsComponent offerId={id}/>
        </>
    );
}

export default FlightDetailsScreen;