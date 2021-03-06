import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className=" mx-2 ">


            <div className="row ">

                <div className="col-6  " data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <Carousel className="carousel bg-dark">
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/ezgif-6-fecb45736f11.webp"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block   "
                                src="https://api.shod.ai/v1/media/pictures/product/snickers-chocolate-50-gm.webp"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/milk-vita-ghee-400-gm.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>

                    </Carousel>
                </div>


                <div className="col-6 " data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/pringles-original-potato-chips-147-gm.webp"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/orange_copy.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://api.shod.ai/v1/media/pictures/product/Boneless-beef-stew.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>

                    </Carousel>
                </div>

            </div>

            <div className="wrapper" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

                <h1 className="text-center d-flex mx-auto  mt-5 pt-5"> Monico
                    <span className="wrapper_child" >  <Typewriter
                        options={{
                            strings: ["Mart", "Shop", "Bazar"],

                            autoStart: true,
                            delay: 70,
                            loop: true
                        }}

                    /> </span>
                </h1>

            </div>









        </div>
    );
};

export default Banner;