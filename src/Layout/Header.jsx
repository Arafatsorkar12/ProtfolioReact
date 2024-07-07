import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
             <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <NavLink to="/" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 display-5"><span className="text-primary">Arafat</span>Sorkar</h1>
                </NavLink>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav m-auto py-0">
                        <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/quality" className="nav-item nav-link">Quality</NavLink>
                        <NavLink to="/skill" className="nav-item nav-link">Skill</NavLink>
                        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                        <NavLink to="/portfolio" className="nav-item nav-link">Portfolio</NavLink>
                        {/* <NavLink to="/review" className="nav-item nav-link">Review</NavLink> */}
                        {/* <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink> */}
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                    {/* <NavLink to="" className="btn btn-outline-primary d-none d-lg-block">Hire Me</NavLink> */}
                </div>
            </nav>
        </div>
    );
};
export default Header;
