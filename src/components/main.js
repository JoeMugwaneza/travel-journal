import React from 'react';

export default function MainContent(props){
    return(
        <div className='main-container'>
            {/* IMAGE SIDE */}
            <img src={require(`../images/${props.imageUrl}`)} className='travel-image'/>

            {/* CONTENT SIDE */}
            <div className='travel-content'>
                <div className='main-top'>
                    <img src={require('../images/locator.png')} className='map-locator'/>
                    <h3 className='travel-location'>{props.title}</h3>
                    <a href={props.googleMap} className='location-map' target="_blank">View on Google Map</a>
                    <span ></span>
                </div>
                <h1 className='travel-title'>{props.location}</h1>
                <h4 className='travel-date'>{props.startDate} - {props.endDate} </h4>
                <p className='travel-description'>{props.description}</p>
            </div>
        </div>
    )
}