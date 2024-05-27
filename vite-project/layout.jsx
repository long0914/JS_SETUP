import React from 'react';
import {Link} from 'react-router-dom';

function Layout(){
    return (
        <>
        <div>
        <h1>My Portfolio</h1>
        <nav>
        
        <img src="./src/assets/15033.jpg" alt="my image" width="100" height="150" />
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | 
         <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
        |<Link to="/service">Service</Link>
        </nav>
        </div>
       
        </>

    );

}

export default Layout;