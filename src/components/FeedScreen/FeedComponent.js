import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllBookings} from "../../services/bookingService";
import Grid from "@mui/material/Grid";
import FeedCardComponent from "./FeedCardComponent";

const FeedComponent = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchAllBookings(dispatch)
    }, []);
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
                    {bookings.length === 0 &&
                    <Typography variant="h2" color='primary'>
                        No feed available
                    </Typography>
                    }
                    <Grid container>
                        {bookings.map((booking) => {
                                          return <FeedCardComponent booking={booking} dispatch={dispatch} key={booking}/>
                                      }
                            )}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default FeedComponent;