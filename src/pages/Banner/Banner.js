
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/main-slider-1-1.jpg'
import banner2 from '../../images/main-slider-1-2.jpg'
import banner3 from '../../images/slider-banner-2.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel fade>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> Explore The World</h3>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3> Explore The World</h3>
                    <p>Discover your next great adventure, become an explorer to get started!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3> Be A Traveller </h3>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;