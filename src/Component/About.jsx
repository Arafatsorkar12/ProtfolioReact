import React from 'react';
// import Image from "../assets/img/about.jpg"
import Header from "../Layout/Header.jsx";
import Image from "../assets/img/135411260.jpeg"
import Footer from "../Layout/Footer.jsx";
const About = () => {
    return (
        <div>
            <Header />

            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1 className="display-1 text-uppercase text-white">About</h1>
                        <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid rounded w-100" src={Image} alt=""/>
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4">Larave Web Developer</h3>
                            <p>As a passionate and ambitious web developer, my aim is to secure a position that allows me to leverage my skills and creativity to contribute to the success of a dynamic organization. I am a hardworking and ambitious individual with a great passion for web development. I specialize in Web Development. I have 2 years of experience in developing web applications, and expertise with HTML, CSS, bootstrap, Php, MySql, PostgreSQL, Ajax , React  and most popular JS & Laravel PHP framework as like Front-end & Back- end.</p>
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2"><h6>Name: <span
                                    className="text-secondary">Arafat Sorkar</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">3 July 1990</span>
                                </h6></div>
                                <div className="col-sm-6 py-2"><h6>Degree: <span
                                    className="text-secondary">BSC in CSE</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Experience: <span
                                    className="text-secondary">2 Years+</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Phone: <span
                                    className="text-secondary">+8801318452438</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Email: <span
                                    className="text-secondary">arafatsorkar12345@gmail.com</span></h6></div>
                                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Muhammadpur , Dhaka , Bangladesh - 1207</span>
                                </h6></div>
                                <div className="col-sm-6 py-2"><h6>Office work: <span
                                    className="text-secondary">Available</span></h6></div>
                            </div>
                            <a href="" className="btn btn-outline-primary mr-4">Hire Me</a>
                            <a href="" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;