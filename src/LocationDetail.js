import React from 'react'
import { BsPerson } from "react-icons/bs";
import { IoClose } from 'react-icons/io5';
import { GrFormDown } from 'react-icons/gr';
import { MapWithAMarker } from './map/googlemap';
import line from './image/line.png';
import green from './image/green.png';
import red from './image/red.png';
import myprofile from './image/myprofile.jpg';


export default function LocationDetail() {
    return (
        <div className="main_data font_face_ps">
            <div className="new_detail">
                <div className="header_section">
                    <div className="close_icon">
                        <div className="close_icon_container">
                            <IoClose />
                        </div>
                    </div>
                    <div className="user_profiledata">
                    <div className="profile_icon">
                 <img src={myprofile} alt="profile"/>
                 </div>
                        </div>
                        <h4 className="for_meuser for_color">For me</h4>
                        <div className="down_newicon">
                            <div className="down_newicon_container">
                                <GrFormDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="location_detail">
                <div className="home_container">
                <img src={green} className="green_arrow"></img>
                <button className="home_btn for_color">Home</button>
                </div>
                <img src={line} className="line_bwn"></img>
            <div className="Where_container">
            <img src={red} className="green_arrow"></img>
            <button className="home_btn primary_color margin_btm">
            <p className="auto_line">|</p>Where to?</button>
            </div>
            </div>
            <div className="new_location">
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCW8tNIujlQkrfY48MKExokLR2gonQQFD4&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `80vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            <button className="done_btn">Done</button>
            </div>
            </div>
    )
}