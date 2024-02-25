import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Component/Vedio.jsx';
import About from './Component/About.jsx';
import Quality from './Component/Expereince.jsx';
import Skill from './Component/Skill.jsx';
import Service from './Component/Service.jsx';
import Portfolio from './Component/Protfolio.jsx';
import Review from './Component/Testimonian.jsx';
import Blog from './Component/Blog.jsx';
import Contact from './Component/Content.jsx';

const React_router_dom = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Quality' element={<Quality />} />
                    <Route path='/Skill' element={<Skill />} />
                    <Route path='/Service' element={<Service />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                    <Route path='/Review' element={<Review />} />
                    <Route path='/Blog' element={<Blog />} />
                    <Route path='/Contact' element={<Contact />} />
                    {/*<Route path='*' element={<Errorpage />} />*/}
                </Routes>
            </Router>
        </div>
    );
};

export default React_router_dom;
