import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FlightDetailsSegmentComponent = ({itinerary, index}) => {
    return (
        <>
            <Box sx={{width: '100%', maxWidth: 500}}>
                {index === 0 ? "Outbound" : "Return"}
                {itinerary.segments.map((segment) => {
                                            return <Box
                                                sx={{
                                                    overflow: 'hidden',
                                                    display:'block',
                                                    border:1
                                                }}
                                            >
                                                    <Typography variant="body2" component="div" color={'primary'}>Departure - {segment.departure.iataCode}</Typography>
                                                <Typography variant="body2" component="div" color={'primary'}>  Dep terminal -{segment.departure.terminal}</Typography>
                                                <Typography variant="body2" component="div" color={'primary'}>Dep time -{segment.departure.at}</Typography>
                                                <Typography variant="body2" component="div" color={'primary'}>Arrival - {segment.arrival.iataCode}</Typography>
                                                <Typography variant="body2" component="div" color={'primary'}>Arrival terminal - {segment.arrival.terminal}</Typography>
                                                <Typography variant="body2" component="div" color={'primary'}>Arrival time - {segment.arrival.at}</Typography>
                                                <Typography variant="body2" component="div" color={'primary'}>Airline - {segment.carrierCode} {segment.number}</Typography>
                                                <Typography variant="body2" component="div" color={'primary'}>Blacklisted in EU - {segment.blacklistedInEU}</Typography>

                                            </Box>
                                        }
                )}
            </Box>
        </>
    )
}

export default FlightDetailsSegmentComponent;