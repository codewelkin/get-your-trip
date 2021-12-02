import React from 'react';
import './App.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import LoginScreen from "./components/LoginScreen";
import SearchScreen from "./components/SearchScreen";

function App() {
    return (

        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Routes>
                    <Route path="/" exact={true} element={<HomeScreen/>}/>
                    <Route path="/login" exact={true} element={<LoginScreen/>}/>
                    <Route path="/search" exact={true} element={<SearchScreen/>}/>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;