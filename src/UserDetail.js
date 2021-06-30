import React from 'react'
import { BsPerson } from "react-icons/bs";
import { IoClose } from 'react-icons/io5';
import { GrFormDown } from 'react-icons/gr';
import { MapWithAMarker } from './map/googlemap';
import line from './image/line.png';
import green from './image/green.png';
import myprofile from './image/myprofile.jpg';
import red from './image/red.png';
import LocationSharp from './LocationSharp';
import UserAddress from './UserAddress';

export default function UserDetail() {
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
                        <div className="user_profile">
            <img src={myprofile} alt="profile"/>
            </div>
                        </div>
                        <h4 className="for_newuser for_color">Bobby Evans</h4>
                        <div className="down_icon">
                            <div className="down_icon_container">
                                <GrFormDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="location_detail box_shade">
                    <div className="home_container">
                        <img src={green} className="green_arrow"></img>
                        <button className="home_btn for_color">Home</button>
                    </div>
                    <img src={line} className="line_bwn"></img>
                    <div className="Where_container">
                        <img src={red} className="green_arrow"></img>
                        <button className="home_btn for_color margin_btm">
                        22733-020,praca seca,rio de janeiro...
                            </button>
                    </div>
                </div>
                <div className="all_location"> 
               <div className="location_data bottom_line">
                   <LocationSharp />     
                    <UserAddress />
                </div>    
                <div className="location_data bottom_line">
                   <LocationSharp />     
                    <UserAddress />
                </div>
                <div className="location_data bottom_line">
                   <LocationSharp />     
                    <UserAddress />
                </div>
                <div className="location_data bottom_line">
                   <LocationSharp />     
                    <UserAddress />
                </div>
                <div className="location_data">
                   <LocationSharp />     
                    <UserAddress />
                </div>      
                </div>
            </div>
        </div>
    )
}