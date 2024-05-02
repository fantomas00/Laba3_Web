import React from 'react';
import '../style/style.css';
import Footer from "./Footer";
import NavBar from "./NavBar";

const Core = ({ Element }) => {

    return (
        <div className="container-fluid">
            <div className="bg-image">
                <NavBar />
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" style={{ backgroundColor: 'rgb(21, 173, 89)', marginBottom: '20px', marginTop: '20px', height: '78.8vh', display: 'flex' }}>
                        <Element />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Core;
