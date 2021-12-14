import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";

const SegmentComponent = ({itinerary, index}) => {
    const [, hours, minutes] = itinerary.duration.match(/(\d+)H(\d+)?/);
    const travelPath = itinerary.segments
        .flatMap(({ arrival, departure }, index, segments) => {
            if (index === segments.length - 1) {
                return [departure.iataCode, arrival.iataCode];
            }
            return [departure.iataCode];
        })
        .join(" → ");
    return(
        <ListItemText
            sx={{ml:3}}
            primary ={index === 0 ? "Outbound" : "Return"}
            secondary={
                <React.Fragment>
                    <Typography
                        variant="body2"
                        color="text.primary"
                    >
                        {travelPath}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.primary"
                    >
                        {hours || 0}h {minutes || 0}m
                    </Typography>
                </React.Fragment>
            }
        />
    )
}

export default SegmentComponent;