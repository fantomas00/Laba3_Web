import React, { useState } from 'react';
import '../style/slideshow.css';

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ["", "", ""];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container">
            {currentSlide === 0 && <img src="https://lavazemtahriri.com/wp-content/uploads/2021/12/IMG_12982.jpg" className="img-rounded"  alt="{}"/>}
            {currentSlide === 1 && <img src="https://th.bing.com/th/id/OIP.33rLZDIESAQ4BEjsvoWWLgHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-rounded"  alt=" "/>}
            {currentSlide === 2 && <img src="https://th.bing.com/th/id/OIP.WPHBR7-hbu2RyaqkqidZLwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="img-rounded"  alt=" "/>}
            <a className="prev" onClick={prevSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
    );

};

export default Slideshow;
