import React from 'react';
import { MapWithAMarker } from './map/googlemap';
import { BsPerson } from "react-icons/bs";
import { TiClipboard } from 'react-icons/ti';
import { GiBackwardTime } from 'react-icons/gi';
import { IoHomeOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import UserAddress from './UserAddress';
import { BiTimeFive } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

export default function Location() {
    return (
        <div className="main_page font_face_ps">
            <div className="my_location">
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCW8tNIujlQkrfY48MKExokLR2gonQQFD4&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `60vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />

                <div className="user_icon">
                    <div className="user_icon_container">
                        <BsPerson />
                    </div>
                </div>

                <div className="clip_icon">
                    <div className="clip_icon_container">
                        <TiClipboard />
                    </div>
                </div>
                <svg width="20" height="20" className="new_svg3">
                    <circle id='top' cx="10" cy="10" r="50" stroke="white" stroke-width="2" fill="#FFCD00" />
                    <text x="50%" y="50%" text-anchor="middle" stroke="#541871" dy=".3em">2</text>
                </svg>
            </div>

            <div className="main_section">
                <div className="user_data">
                    <h3 className="user_title">Good morning,Jose wood</h3>
                </div>

                <div className="bottom_container_data">
                    <div className="bottom_section">
                        <p>Where to?</p>
                        <button className="select_time">
                            <IconContext.Provider value={{ color: "#FFFFFF" }}>
                                <div className="schedule_time">
                                    <BiTimeFive />
                                </div>
                            </IconContext.Provider>

                            <span className="status_time">Now </span>
                            <IconContext.Provider value={{ color: "#FFFFFF" }}>
                                <div className="down_btnicon">
                                    <FiChevronDown />
                                </div>
                            </IconContext.Provider>
                        </button>
                    </div>

                    <div className="address_section bottom_line new_mrg">
                        <div className="saved_place_container">
                            <IconContext.Provider value={{ color: "#FFFFFF" }}>
                                <div className="locationuser_detail">
                                    <GiBackwardTime />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <UserAddress />
                    </div>

                    <div className="address_section">
                        <IconContext.Provider value={{ color: "#FFFFFF" }}>
                            <div className="time_icon">
                                <IoHomeOutline />
                            </div>
                        </IconContext.Provider>
                        <div className="main_datail">
                            <p className="info_userdata">Home</p>
                            <p className="full_userdetail">22733-020,praca seca,rio de janeiro...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}