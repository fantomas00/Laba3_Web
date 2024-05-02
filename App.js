import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calc from "./components/Calc";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LogPage";
import SignPage from "./components/SignPage";
import Core from "./components/CoreElement";

function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route index element={<Calc/>}/>
                    <Route path="/home" element={<Calc/>}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/log-in" element={<Core Element={LoginPage} />}/>
                    <Route path="/sign-in" element={<Core Element={SignPage} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
