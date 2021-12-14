import NavBar from "../NavBar";
import LoginComponent from "./LoginComponent";

const LoginScreen = () => {
    return (
        <>
            <NavBar page={'login'}/>
            <LoginComponent/>
        </>
    )
}

export default LoginScreen;