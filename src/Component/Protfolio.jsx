import React from 'react';

import img11 from "../assets/img/portfolio-1.jpg"
import img12 from "../assets/img/portfolio-2.jpg"
import img13 from "../assets/img/portfolio-3.jpg"
import img14 from "../assets/img/portfolio-4.jpg"
import img15 from "../assets/img/portfolio-5.jpg"
import img16 from "../assets/img/portfolio-6.jpg"
const Protfolio = () => {
    return (
        <div>
            <div className="container-fluid pt-5 pb-3" id="portfolio">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white"
                             >Gallery</h1>
                        <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-2">
                            <ul className="list-inline mb-4" id="portfolio-flters">
                                <li className="btn btn-sm btn-outline-primary m-1 active" data-filter="*">All</li>
                                <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
                                <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development
                                </li>
                                <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid rounded w-100" src={img11} alt=""/>
                                <div
                                    className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href={img11} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white"  ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid rounded w-100" src={img12} alt=""/>
                                <div
                                    className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href={img12} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white" ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid rounded w-100" src={img13} alt=""/>
                                <div
                                    className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href={img13} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white"  ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid rounded w-100" src={img14} alt=""/>
                                <div
                                    className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href={img14} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white"  ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid rounded w-100" src={img15} alt=""/>
                                <div
                                    className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href={img15} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white"  ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                            <div className="position-relative overflow-hidden mb-2">
                                <img className="img-fluid rounded w-100" src={img16} alt=""/>
                                <div
                                    className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                    <a href={img16} data-lightbox="portfolio">
                                        <i className="fa fa-plus text-white"  ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;