import React from 'react';
import '../style/style.css'

const Footer = () => {
    return (
        <>
            <div className="col-md-8"
                 style={{ bottom: 0, width: '100%', backgroundColor: 'rgb(21, 173, 89)', height: '100px', textAlign: 'center' }}>
                <div className="container" >
                    <p style={{paddingTop: '16px'}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
                </div>
            </div>
            <div className="col-md-2"></div>
        </>
    );
};

export default Footer;