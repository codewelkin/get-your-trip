import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
    CircularProgress,
    FormControl, FormControlLabel, FormLabel,
    InputLabel,
    MenuItem, RadioGroup,
    Select, Switch,
    TextField
} from "@mui/material";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import Grid from "@mui/material/Grid";
import {fetchAllFlightOffers, getFlights, searchFlights} from "../../services/flightService";
import {useDispatch, useSelector} from "react-redux";
import List from "@mui/material/List";
import SearchListItem from "./SearchListItem";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Radio from '@mui/material/Radio';
import Typography from "@mui/material/Typography";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const getAllFlights = (state) => state.flights.flights;

const SearchComponent = ({
                             searchCriteria = {
                                 origin: 'BOS',
                                 destination: 'DAL',
                                 departureDate: today,
                                 returnDate: tomorrow,
                                 airlineClass: 'Economy',
                                 adults: 2,
                                 children: 0,
                                 tripType: 'one-way'
                             }
                         }) => {
    const airlineClasses = [
        'Economy',
        'Premium Economy',
        'Business',
        'First Class',
    ];

    const dispatch = useDispatch();
    let flights = useSelector(getAllFlights);
    if (!flights || flights.length === 0) {
        flights = !JSON.parse(localStorage.getItem("flights")) ? [] : JSON.parse(localStorage.getItem("flights"));
    }
    const [localSearchCriteria, setLocalSearchCriteria] = useState(searchCriteria)
    const [loader, setLoader] = useState(false)

    const handleChange = (newSearchCriteria) => {
        setLocalSearchCriteria(newSearchCriteria);
    }

    const searchFlightsHandler = () => {
        dispatch({
                     type: 'set-flight-offers',
                     flights: []
                 })
        setLoader(true);
        searchFlights(dispatch, localSearchCriteria);
    }

    return (
        <>
            <Box
                component="section"
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    backgroundColor: 'primary.light',
                    mt: 6,
                    ml: 16,
                    mr: 16,
                    borderRadius: '20px'
                }}
            >
                <Container
                    sx={{
                        mt: 2,
                        mb: 2,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        <FlightTakeoffIcon
                            sx={{
                                fontSize: 76,
                                color: 'primary.main',
                                borderRadius: 50,
                                border: 4
                            }}/>
                    </div>
                    <Box sx={{mt: 2, mb: 1}}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                aria-label="tripType"
                                name="row-radio-buttons-group"
                                value={localSearchCriteria.tripType}
                                onChange={(event) => handleChange(
                                    {...localSearchCriteria, tripType: event.target.value})}
                            >
                                <FormControlLabel value="one-way" control={<Radio/>}
                                                  label="One way"/>
                                <FormControlLabel value="round-trip" control={<Radio/>}
                                                  label="Round Trip"/>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <div>
                        <TextField
                            required
                            sx={{m: 2}}
                            id="outlined-required"
                            label="FROM"
                            type="search"
                            value={localSearchCriteria.origin}
                            onChange={(event) => handleChange(
                                {...localSearchCriteria, origin: event.target.value})}
                        />
                        <TextField
                            required
                            sx={{m: 2}}
                            id="outlined-required"
                            type="search"
                            label="TO"
                            value={localSearchCriteria.destination}
                            onChange={(event) => handleChange(
                                {...localSearchCriteria, destination: event.target.value})}
                        />
                        <TextField
                            required
                            sx={{m: 2}}
                            id="outlined-required"
                            type="date"
                            label="DEPARTURE"
                            value={localSearchCriteria.departureDate}
                            onChange={(event) => handleChange(
                                {...localSearchCriteria, departureDate: event.target.value})}
                            InputLabelProps={{shrink: true}}
                        />
                        {localSearchCriteria.tripType === 'round-trip' &&
                         <TextField
                             sx={{m: 2}}
                             id="outlined-required"
                             type="date"
                             label="RETURN"
                             value={localSearchCriteria.returnDate}
                             onChange={(event) => handleChange(
                                 {...localSearchCriteria, returnDate: event.target.value})}
                             InputLabelProps={{shrink: true}}
                         />
                        }
                    </div>

                    <Grid container spacing={2}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <FormControl sx={{m: 2}}
                                         fullWidth>
                                <InputLabel id="airineClass">CLASS</InputLabel>
                                <Select
                                    labelId="airineClass"
                                    id="class-select"
                                    value={localSearchCriteria.airlineClass}
                                    label="CLASS"
                                    onChange={(event) => handleChange(
                                        {...localSearchCriteria, airlineClass: event.target.value})}
                                >
                                    {airlineClasses.map((airlineClass) => (
                                        <MenuItem
                                            key={airlineClass}
                                            value={airlineClass}
                                        >
                                            {airlineClass}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl sx={{m: 2}} fullWidth>
                                <InputLabel id="adults">ADULTS</InputLabel>
                                <Select
                                    label="ADULTS"
                                    labelId="adults"
                                    id="adults-select"
                                    value={localSearchCriteria.adults}
                                    onChange={(event) => handleChange(
                                        {...localSearchCriteria, adults: event.target.value})}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl sx={{m: 2}}
                                         fullWidth>
                                <InputLabel id="children">CHILDREN</InputLabel>
                                <Select
                                    label="CHILDREN"
                                    labelId="children"
                                    id="children-select"
                                    value={localSearchCriteria.children}
                                    onChange={(event) => handleChange(
                                        {...localSearchCriteria, children: event.target.value})}
                                >
                                    <MenuItem value={0}>0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>

                    <Box sx={{m: 2}}>
                        <Button
                            onClick={searchFlightsHandler}
                            color="primary"
                            variant="contained"
                            size="large"
                            sx={{minWidth: 200, height: 60}}
                        >
                            search
                        </Button>
                    </Box>

                </Container>
            </Box>
            {
                loader && flights.length === 0 &&
                <Box component="section"
                     sx={{
                         position: 'relative',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         overflow: 'hidden',
                         mt: 6,
                         ml: 16,
                         mr: 16,
                     }}>
                    <CircularProgress color='primary'/>
                </Box>
            }

            {
                flights.length > 0 &&
                <Box
                    component="section"
                    sx={{
                        display: 'flex',
                        overflow: 'hidden',
                        backgroundColor: `${!!flights && 'primary.light'}`,
                        mt: 6,
                        ml: 16,
                        mr: 16,
                        borderRadius: '20px'
                    }}
                >
                    <Container>
                        <List>
                            {!!flights && flights.map(offer =>
                                                          <SearchListItem offer={offer}
                                                                          key={offer}/>
                            )}
                        </List>
                    </Container>
                </Box>
            }
        </>
    )
        ;
}

export default SearchComponent;