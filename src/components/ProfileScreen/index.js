import NavBar from "../NavBar";
import ProfileComponent from "./ProfileComponent";
import {useParams} from "react-router-dom";

const ProfileScreen = () => {
    const {id} = useParams();
    return(
        <>
            <NavBar page={'profile'} login={true}/>
            <ProfileComponent id={id}/>
        </>
    );
}

export default ProfileScreen;