import './Customers.css'
import React from 'react';

import client2 from '../../images/reviews/img21.jpg'
import client3 from '../../images/reviews/img22.jpg'



const Customers = () => {
    return (
        <div className="clients-reviews">
            <dev className=" reviwes ">
                <div className="pb-5">
                    <p style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: "700"}}>TESTIMONIALS</p>
                    <h1 className=" fs-1 fw-bold" style={{ color: "darkblue" }}>What our <span style={{ color: "red"}}>customers</span> say about us?</h1>
                    <p>A must-have template. Maybe one of the best vintage templates so <br /> far in the market. Recommended 100%.</p>

                </div>
                <div className="container ">
                    <div class="row ">
                        <div class="col-sm-6">
                            <div class="card border-0">
                                <div class="card-body">
                                    <img class="rounded-circle" src={client3} alt="" />

                                    <p class="card-text text-center">Amber, Hi. We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach w/ Covid concerns. The beach is for guests only & Thanks so much for finding the perfect spot for us.</p>
                                    <h1>Emma Watson</h1>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card border-0">
                                <div class="card-body">
                                    <img class="rounded-circle" src={client2} alt="" />
                                    <p class="card-text text-center">Annie is always a pleasure to work with. She is friendly, professional and well informed. Annie always efficiently deals with any travel issues we have even if they occur last minute. Every trip we have planned with her has been excellent.</p>
                                    <h1>Stephanie B.</h1>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dev>

        </div>
    );
};

export default Customers;