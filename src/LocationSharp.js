import React  from 'react';
import { IconContext } from 'react-icons/lib';
import { IoLocationSharp } from 'react-icons/io5';

export default function LocationSharp(){
    return(
        <div className="new_adddetail font_face_ps">
            <IconContext.Provider value={{color:"#FFFFFF" }}>
                <div className="user_location">
                    <IoLocationSharp />
                </div>
                </IconContext.Provider>
        </div>
    )
    
}