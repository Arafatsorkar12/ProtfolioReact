import React from 'react';

import images from "../assets/img/profile.jpg"
import Footer from "../Layout/Footer.jsx";
import Header from "../Layout/Header.jsx";
const Vedio = () => {
    return (
        <div>
            <Header/>
            <br/>
            <br/>
            <br/>
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                            <img className="img-fluid w-100 rounded-circle shadow-sm" src={images} alt=""/>
                        </div>
                        <div className="col-lg-7 text-center text-lg-left">
                            <h3 className="text-white font-weight-normal mb-3">I m Kate Winslet Web Designer, Web
                                Developer, Front End Developer, Apps
                                Designer, Apps Developer</h3>
                            <h1 className="display-3 text-uppercase text-primary mb-2"
                            >Kate Winslet</h1>
                            <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
                            <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps
                                Designer, Apps Developer
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                                <a href="" className="btn btn-outline-light mr-5">Download CV</a>
                                <button type="button" className="btn-play" data-toggle="modal"
                                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                    <span></span>
                                </button>
                                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    );
};

export default Vedio;