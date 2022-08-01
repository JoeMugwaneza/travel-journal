import React from 'react';

export default function NavBar(){
    return(
        <div className='nav-bar'>
                <img src={require("../images/globe.png")} className="nav-logo"/>
                <h1>My Travel Journal</h1>
        </div>
    )
}