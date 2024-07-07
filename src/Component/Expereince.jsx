import React from 'react';
import Header from "../Layout/Header.jsx";

import Footer from "../Layout/Footer.jsx";

const Expereince = () => {
    return (
        <div>
            <Header />

            <div className="container-fluid py-5" id="qualification">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white"
                            >Quality</h1>
                        <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4">My Education</h3>
                            <div className="border-left border-primary pt-2 pl-4 ml-2">
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute"
                                       ></i>
                                    <h5 className="font-weight-bold mb-1">BSC In CSE</h5>
                                    <p className="mb-2"><strong>State University Of Bangladesh</strong> | <small>2018 -
                                        2022</small></p>
                                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor
                                        eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem
                                        eirmod duo sit ipsum stet lorem diam</p>
                                </div>
                                {/* <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute"
                                     ></i>
                                    <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                                    <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 -
                                        2050</small></p>
                                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor
                                        eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem
                                        eirmod duo sit ipsum stet lorem diam</p>
                                </div> */}
                                {/* <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute"
                                      ></i>
                                    <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                                    <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 -
                                        2050</small></p>
                                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor
                                        eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem
                                        eirmod duo sit ipsum stet lorem diam</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4">My Expericence</h3>
                            <div className="border-left border-primary pt-2 pl-4 ml-2">
                                <div className="position-relative mb-4">
                                    {/* <i className="far fa-dot-circle text-primary position-absolute"
                                     ></i> */}
                                    <h5 className="font-weight-bold mb-1">Laravel Developer</h5>
                                    <p className="mb-2"><strong>Smart Software Ltd.</strong> | <small>2023 - Present</small></p>
                                    <p>Error correction is the most popular and demanding job. Which is my main responsibility. I work on Govt projects. I work on the Payment System and Account Module.</p>
                                </div>
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute"
                                        ></i>
                                    <h5 className="font-weight-bold mb-1">Laravel Developer intern</h5>
                                    <p className="mb-2"><strong>Soft Company</strong> | <small>02/2023 - 05/2023</small></p>
                                    <p>There Have Web Based Software. i Developed web-based software.</p>
                                </div>
                                <div className="position-relative mb-4">
                                    <i className="far fa-dot-circle text-primary position-absolute"
                                        ></i>
                                    <h5 className="font-weight-bold mb-1">Software Developer (Part-Time)</h5>
                                    <p className="mb-2"><strong>Soft Park IT</strong> | <small>09/2022 - 03/2023</small></p>
                                    <p>worked on e-commerce management systems</p>
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

export default Expereince;