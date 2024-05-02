import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../style/style.css';
import Slideshow from "./Slideshow";

const AboutPage = () => {
    return (
        <div className="container-fluid">
            <div className="bg-image">
               <NavBar/>
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8" style={{ marginBottom: '25px' }}>
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                <Slideshow/>
                            </div>
                        </div>
                        <div className="flex" >
                        <div className="row pt-4 " style={{ backgroundColor: 'rgb(21, 173, 89)', borderRadius: '5px', }} >
                            <div className="col-md-6">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu. Suspendisse at vestibulum elit.</p>
                            </div>
                            <div className="col-md-6">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu. Suspendisse at vestibulum elit.</p>
                            </div>
                        </div>
                        <div className="row mt-4 " style={{ backgroundColor: 'rgb(21, 173, 89)', borderRadius: '5px' }}>
                            <div className="col-md-6">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu. Suspendisse at vestibulum elit.</p>
                            </div>
                            <div className="col-md-6">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu. Suspendisse at vestibulum elit.</p>
                            </div>
                        </div>
                        <div className="row mt-4 " style={{ backgroundColor: 'rgb(21, 173, 89)', borderRadius: '5px' }}>
                            <div className="col-md-6">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu. Suspendisse at vestibulum elit.</p>
                            </div>
                            <div className="col-md-6">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac leo sed felis ullamcorper volutpat. Ut nec arcu sit amet felis consequat vestibulum non eu dui. Nulla vel tempor tellus. Sed scelerisque varius dui, sed tincidunt felis pulvinar eu. Suspendisse at vestibulum elit.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AboutPage;
