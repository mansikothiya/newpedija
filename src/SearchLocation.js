import React from 'react';
import green from './image/green.png';
import red from './image/red.png';
import {BsStar} from 'react-icons/bs';
import line from './image/line.png';
import {IoClose} from 'react-icons/io5';
import { BsPerson } from "react-icons/bs";
import {GrFormDown} from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import {AiOutlineRight} from 'react-icons/ai';
import {IoLocationSharp} from 'react-icons/io5';
import {GiBackwardTime} from 'react-icons/gi';
import myprofile from './image/myprofile.jpg';
import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import {GrRadialSelected} from 'react-icons/gr';
import {AiOutlinePlus} from 'react-icons/ai';

const useStyles=makeStyles({
    scrollPaper: {
        alignItems: "baseline",
        // margin :0
      },
      paper: { 
          minWidth: "100vw",
          maxHeight:"200px",
     },
})

function SwitchRider(props){
    const classes = useStyles();
    const {show,close}=props;
return(
    <Dialog open={show} classes={{ scrollPaper: classes.scrollPaper,paper:classes.paper,root:classes.root}}>
      <div className="newpage font_face_ps">
          <div className="upper_section">
            <p className="switch_rider">Switch Rider</p>
          <div className="down_popicon">
                     <div className="down_popicon_container">
                    <GrFormDown />
                     </div>
            </div>
            
            <div className="close_popicon">
            <button onClick={close} className="close_popupbtn">
                     <div className="close_popicon_container">
                     <IoClose />
                     </div>
            </button>
            </div>
            </div>
            <div className="profile_section">
                <div className="user_profile">
            <img src={myprofile} alt="profile"/>
            </div>
                <p className="user_name">Me</p>
                <div className="select_user">
                     <div className="select_user_container">
                    <GrRadialSelected />
                     </div>
            </div>
          </div>
          <div className="choose_ride">
          <div className="plus_popicon">
                     <div className="plus_popicon_container">
                     <AiOutlinePlus />
                     </div>
            </div>
        <p className="select_option">Choose who's riding</p>
          </div>

        </div>
    </Dialog>
)
}


 function SearchLocation() {
    const [show,setShow]=useState(false);
   const handleClose=()=>{
       setShow(false);
   }
    return (
        <div className="main_detail font_face_ps">
            <div className="new_detail">
            <div className="header_section">
             <div className="close_icon">
                     <div className="close_icon_container">
                     <IoClose />
                     </div>
                 </div>
            <button onClick={()=>setShow(true)}>
                <div  className="user_profiledata">
                 <div className="profile_icon">
                 <img src={myprofile} alt="profile"/>
                 </div>
                 <h4 className="for_user for_color">For Me</h4>
                 <div className="down_myicon">
                     <div className="down_myicon_container">
                    <GrFormDown />
                     </div>
                 </div>
                 </div>
                 </button>
                    </div>
            <div className="location_detail box_shade">
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
            <div className="middle_section">
            <div className="place_data mrg_lft">
            <div className="saved_place_container">
                <IconContext.Provider value={{color:"#FFFFFF" }}>
                <div className="user_detail">
                    <BsStar />
                </div>
                </IconContext.Provider>
                <p className="save_place">Saved Places</p>
                <IconContext.Provider value={{color:"#AFB1BC" }}>
                <div className="rightarrow_detail">
                    <AiOutlineRight />
                </div>
                </IconContext.Provider>
            </div>
            </div>
            <div className="location_info mrg_lft">
                <div className="saved_place_container">
                <IconContext.Provider value={{color:"#FFFFFF" }}>
                <div className="user_detail">
                    <IoLocationSharp />
                </div>
                </IconContext.Provider>
                <p className="select_location">select location via map</p>
                <IconContext.Provider value={{color:"#AFB1BC" }}>
                <div className="rightarrow_btm">
                    <AiOutlineRight />
                </div>
                </IconContext.Provider>
            </div>
            </div>
            </div>
            </div>
             <div className="bottom_container">
            <div className="last_search">
                <h4 className="recent_search">Recent search</h4>
           
            <div className="address_section bottom_line new_mrg">   
                    <div className="saved_place_container">
                <IconContext.Provider value={{color:"#FFFFFF" }}>
                <div className="user_detail">
                    <GiBackwardTime />
                </div>
                </IconContext.Provider>
               <div className="main_detail">
                        <p className="info_user">Praca seca rio de janeiro</p>
                        <p className="full_detail">22733-020,praca seca,rio de janeiro...</p>
                    </div>      
               </div>
        </div>
        </div>
                <div className="address_section">
                      <div className="saved_place_container">
                <IconContext.Provider value={{color:"#FFFFFF" }}>
                <div className="user_detail">
                    <GiBackwardTime />
                </div>
                </IconContext.Provider>
               <div className="main_detail">
                        <p className="info_user">Praca seca rio de janeiro</p>
                        <p className="full_detail">22733-020,praca seca,rio de janeiro...</p>
                    </div>      
               </div>
                </div>
                </div> 
                <div className="dialog_container">
                <SwitchRider show={show} close={handleClose}/>

                </div>
        </div>
    )
}

export default (SearchLocation);