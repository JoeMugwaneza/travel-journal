import React from 'react';

export default function MainContent(){
    return(
        <div className='main-container'>
            <img src={require("../images/karongi.jpg")}/>
            <img src={require('../images/locator.png')}/>
            <h3>Rwanda</h3>
            <span>View on Google Map</span>
            <h1>Karongi</h1>
            <span>Date</span>
            <p>description of the travel</p>
        </div>
    )
}