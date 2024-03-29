import React from 'react';

import Img from "../assets/img/testimonial-1.jpg"
import Img2 from "../assets/img/testimonial-2.jpg"
import Img3 from "../assets/img/testimonial-3.jpg"
import Header from "../Layout/Header.jsx";

import Footer from "../Layout/Footer.jsx";
const Testimonian = () => {
    return (
        <div>
            <Header />

            <div className="container-fluid py-5" id="testimonial">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white"
                           >Review</h1>
                        <h1 className="position-absolute text-uppercase text-primary">Clients Say</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum
                                        est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                                        dolor stet accusam amet eirmod eos, labore diam clita</h4>
                                    <img className="img-fluid rounded-circle mx-auto mb-3" src ={Img}
                                          />
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum
                                        est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                                        dolor stet accusam amet eirmod eos, labore diam clita</h4>
                                    <img className="img-fluid rounded-circle mx-auto mb-3" src={Img2}
                                          />
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum
                                        est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                                        dolor stet accusam amet eirmod eos, labore diam clita</h4>
                                    <img className="img-fluid rounded-circle mx-auto mb-3" src={Img3}
                                          />
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Testimonian;