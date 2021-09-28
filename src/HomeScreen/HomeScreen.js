import React from 'react'
import "./HomeScreen.css"
import {MdCancel} from "react-icons/md"

const HomeScreen = () => {
    return (
        <div className="container">
            <div className="container_wrapper">

                 <div className="container_card">
                     <div className="container_cardRow">
                         <div className="container_cardcancel" >
                             <MdCancel/>
                             </div>
                         <div>Avatar</div>
                          </div>

                     <div className="container_cardqoutes"> 

                         If you dont like the road you are walking, 
                         start paving another </div>

                     <div>names </div>

                     <div>time </div>




                </div>
                <div className="container_card"></div>
                <div className="container_card"></div>
                <div className="container_card"></div>
                <div className="container_card"></div>
                <div className="container_card"></div> 

            </div>
        </div>
    )
}

export default HomeScreen
