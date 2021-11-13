import React from 'react';
import paris from '../../images/paris.png'
import './Offers.css'

const Offers = () => {
    return (

        <div id="offers" >
             <div className="container-fluid mt-3" style={{backgroundColor:"#90475f"}}>
                    <div className="row">
                        <div className="col-md-5">
                            <img src="https://www.pngonly.com/wp-content/uploads/2017/06/Special-Discount-PNG-02.png" alt="" className="img-fluid w-50 " />
                        </div>
                    </div>
              </div>
            <div className="container">
               
                <div className="row">
                    <div className="col-md-6 col-12  ">
                        <div className="mt-lg-5">
                            <img src={paris} alt="" className="img-fluid" />

                        </div>

                    </div>
                    <div className="col-md-6 col-12">
                        <div className="mt-5 p-5 justify-content-center ">
                        <h1 style={{ color: "red", fontStyle: "italic", fontFamily: "cursive", padding:"10px" }}>30% DesCount</h1>
                            <h1 className=" fs-1 fw-bold" style={{ color: "darkblue" }}>Plan Your Trip with Trevily</h1>
                            <p>There are many variations of passages of available but the majority have suffered  alteration in some form, by injected hum randomised <br /> words which don't look even slightly.</p>

                            <div className="text-start fs-5">
                                <li>Invest in your simply neighborhood</li>
                                <li> Support people in free text extreme need</li>
                                <li>Largest global industrial business community</li>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;