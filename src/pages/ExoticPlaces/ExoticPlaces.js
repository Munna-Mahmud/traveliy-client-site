import React from 'react';
import './ExoticPlaces.css'
import picture1 from '../../images/gallary/3.jpg'
import picture2 from '../../images/gallary/5.jpg'
import picture3 from '../../images/gallary/6.jpg'
import picture4 from '../../images/gallary/7.jpg'
import picture5 from '../../images/gallary/8.jpg'
import picture6 from '../../images/gallary/1.jpg'
import picture7 from '../../images/gallary/4.jpg'
import picture8 from '../../images/gallary/2.jpg'


const ExoticPlaces = () => {
    return (
        <div className=" clients mt-5" id="exoticPlaces">
            <p className="">Destination List</p>
            <h1 className=" fs-1 fw-bold" style={{ color: "darkblue" }}>Go Exotic Places</h1>
            <div className=" container-fluid">
                <div class="row d-flex  ">
                    <div class="col-md-3">
                        <div class="card border-0">

                            <img src={picture1} class="card-img-top" alt="..." />
                            <div class="layer">
                                <h3>LONDON </h3>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0">
                            <img src={picture3} class="card-img-top" alt="..." />
                            <div class="layer">
                                <h3>Istanbul </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0">
                            <img src={picture5} class="card-img-top" alt="..." />
                            <div class="layer">
                                <h3>Germany </h3>
                            </div>


                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0">
                            <img src={picture7} class="card-img-top" alt="..." />
                            <div class="layer">
                                <h3>Qatar</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0">
                            <img src={picture6} class="card-img-top mt-4" alt="..." />
                            <div class="layer">
                                <h3>China </h3>
                            </div>


                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0">
                            <img src={picture8} class="card-img-top mt-4" alt="..." />
                            <div class="layer">
                                <h3>LONDON </h3>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0">
                            <img src={picture4} class="card-img-top mt-4" alt="..." />
                            <div class="layer">
                                <h3>Venice </h3>
                            </div>


                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-0">
                            <img src={picture2} class="card-img-top mt-4" alt="..." />
                            <div class="layer">
                                <h3>Maldives</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExoticPlaces;