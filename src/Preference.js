import React from 'react';
import { MapWithAMarker } from './map/googlemap';
import { IoArrowBackOutline } from 'react-icons/io5';
import { BsDot } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import coupon from './image/discount.png';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import { GrUserManager } from 'react-icons/gr';
import { CgChevronRight } from 'react-icons/cg';
import mini from './image/Mini.png';
import micro from './image/Micro.png';
import sedan from './image/Sedan.png';
import xl from './image/XL.png';
import { FaUser } from 'react-icons/fa';
import IconTint from 'react-icon-tint';
import location from './image/location.png';
import { BsBriefcaseFill } from 'react-icons/bs';
import { IoCalendarSharp } from 'react-icons/io5';

export default function Preference() {
    return (
        <div className="minipedija_detail font_face_ps">
            <div className="live_location">
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCW8tNIujlQkrfY48MKExokLR2gonQQFD4&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `60vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <div className="back_icon">
                    <div className="back_icon_container">
                        <IoArrowBackOutline />
                    </div>
                </div>
                <div className="find_location">
                    <div className="find_location_container">
                        <IconTint src={location} color="#541871" />
                    </div>
                </div>
            </div>
            <div className="bottom_detail">
                <div className="middle_detail ">
                    <div className="microcar_detail bdr_btmmini">
                        <div className="minicar_icon ">
                            <img src={mini} alt="mini" />
                        </div>
                        <h6 className="microcar_title">Mini</h6>
                        <div className="booking_detail">
                            <p className="rent_detail">$250.50</p>
                            <div className="dot_icon">
                                <div className="dot_icon_container">
                                    <BsDot />
                                </div>
                            </div>
                            <p className="people_detail">2</p>
                            <div className="people_icon">
                                <div className="people_icon_container">
                                    <HiUser />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="microcar_detail opacity_new">
                        <div className="minicar_icon">
                            <img src={micro} alt="micro" />
                        </div>
                        <h6 className="microcar_title">Micro</h6>
                        <div className="booking_detail">
                            <p className="rent_detail">$250.50</p>
                            <div className="dot_icon">
                                <div className="dot_icon_container">
                                    <BsDot />
                                </div>
                            </div>
                            <p className="people_detail">2</p>
                            <div className="people_icon">
                                <div className="people_icon_container">
                                    <HiUser />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="microcar_detail opacity_new">
                        <div className="minicar_icon">
                            <img src={sedan} alt="sedan" />
                        </div>
                        <h6 className="microcar_title">Sedan</h6>
                        <div className="booking_detail">
                            <p className="rent_detail">$250.50</p>
                            <div className="dot_icon">
                                <div className="dot_icon_container">
                                    <BsDot />
                                </div>
                            </div>
                            <p className="people_detail">2</p>
                            <div className="people_icon">
                                <div className="people_icon_container">
                                    <HiUser />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="microcar_detail opacity_new">
                        <div className="minicar_icon">
                            <img src={xl} alt="xl" />
                        </div>
                        <h6 className="microcar_title">XL</h6>
                        <div className="booking_detail">
                            <p className="rent_detail">$250.50</p>
                            <div className="dot_icon">
                                <div className="dot_icon_container">
                                    <BsDot />
                                </div>
                            </div>
                            <p className="people_detail">2</p>
                            <div className="people_icon">
                                <div className="people_icon_container">
                                    <HiUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="discount_detail">
                    <div className="coupen_detail">
                        <div className="new_coupon">
                            <div className="coupon_icon">
                                <img src={coupon} />
                            </div>
                            <div className="promocode_title">Promocode
                            </div>

                        </div>

                    </div>
                    <div className="driver_detail">
                        <div className="new_driver">
                            <IconContext.Provider value={{ color: "#858AA8" }}>
                                <div className="driver_icon">
                                    <GrUserManager />
                                </div>
                            </IconContext.Provider>
                            <div className="preference_detail">Preferences</div>
                        </div>
                    </div>
                </div>

                <div className="payment_detail">
                    <div className="user_payment">
                        <div className="user_profileicon">
                            <div className="user_profileicon_container">
                                <FaUser />
                            </div>
                        </div>
                        <div className="user_payicon">
                            <div className="user_payicon_container">
                                <BsBriefcaseFill />
                            </div>
                        </div>
                        <div className="select_method">
                            <p className="personal_payment">Personal</p>
                            <p className="choose_method">Choose payment method</p>
                        </div>
                        <div className="moreselect_icon">
                            <CgChevronRight />
                        </div>
                    </div>
                </div>
                <div className="confirm_section">
                    <button className="confirm_btn">Confirm mini</button>
                    <div className="schedule_ride">
                        <div className="schedule_ride_container">
                            <IoCalendarSharp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}