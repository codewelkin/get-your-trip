import NavBar from "../NavBar";
import UserManagementComponent from "./UserManagementComponent";

const UserManagementScreen = () => {
    return (
        <>
            <NavBar page='userManagement'/>
            <UserManagementComponent/>
        </>
    )
}

export default UserManagementScreen;