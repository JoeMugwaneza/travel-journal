import React from 'react';

export default function MainContent(){
    return(
        <div className='main-container'>
            {/* IMAGE SIDE */}
            <img src={require("../images/karongi.jpg")} className='travel-image'/>

            {/* CONTENT SIDE */}
            <div className='travel-content'>
                <div className='main-top'>
                    <img src={require('../images/locator.png')} className='map-locator'/>
                    <h3 className='travel-location'>Karongi, Western</h3>
                    <span>View on Google Map</span>
                </div>
                <h1 className='travel-title'>Karongi Lakeside</h1>
                <h4 className='travel-date'>Star - End Date </h4>
                <p className='travel-description'>A modern, private 4-bedroom home with 200 degree views of breathtaking Lake Kivu. An annex offers two additional en suite rooms for separate rental. Perfect for a special occasion, a personal retreat, or multiple families to relax and enjoy together.</p>
            </div>
        </div>
    )
}