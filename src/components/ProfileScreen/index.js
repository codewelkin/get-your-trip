import NavBar from "../NavBar";
import BookingComponent from "../MyBookingScreen/BookingComponent";

const ProfileScreen = () => {
    return(
        <>
            <NavBar page={'profile'} login={true}/>
            Profile screen
            <BookingComponent/>
        </>
    );
}

export default ProfileScreen;