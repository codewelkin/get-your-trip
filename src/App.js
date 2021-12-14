import React from 'react';
import './App.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import LoginScreen from "./components/LoginScreen";
import SearchScreen from "./components/SearchScreen";
import SignupScreen from "./components/SignupScreen";
import MyBookingScreen from "./components/MyBookingScreen";
import ProfileScreen from "./components/ProfileScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import flights from "./reducers/flights";
import PrivacyPolicyScreen from "./components/PrivacyPolicyScreen";
import FlightDetailsScreen from "./components/FlightDetailsScreen";
import offers from "./reducers/offers";

const reducer = combineReducers({flights : flights, offers})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                        <Route path="/" exact={true} element={<HomeScreen/>}/>
                        <Route path="/login" exact={true} element={<LoginScreen/>}/>
                        <Route path="/signup" exact={true} element={<SignupScreen/>}/>
                        <Route path="/search" exact={true} element={<SearchScreen/>}/>
                        <Route path="/bookings" exact={true} element={<MyBookingScreen/>}/>
                        <Route path="/profile" exact={true} element={<ProfileScreen/>}/>
                        <Route path="/profile/:id" exact={true} element={<ProfileScreen/>}/>
                        <Route path="/privacy" exact={true} element={<PrivacyPolicyScreen/>}/>
                        <Route path="/details/:id" exact={true} element={<FlightDetailsScreen/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;