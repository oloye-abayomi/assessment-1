import React from 'react'
import "./WorkHome.css"
import {MdCancel} from "react-icons/md"
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"

const WorkHome = () => {
 
    
    return (
        

              <div className="container">
                  <div className="container_wrapper">
                      <div className="container_card">

                          <div
                           className="container_cardRow">
                              <div 
                              className="container_cardRowCancel">
                                  <MdCancel/>
                                  </div>
                              <div
                              className="container_cardRowAvatar">
                              Avatar</div>
                          </div>

                          <div className="container_cardRowQoute">

                              
                            
                               <div> < ImQuotesLeft/>
                                Sometimes, it falls upon a 
                               generation to be great. 
                                   You can be that great generation.
                                       Let your greatness blossom 
                                <ImQuotesRight />
                               </div>
                              
                               </div>


                               <div className="container_cardRowName">
                                     Nelson Mandela </div>

                          <div className="container_cardRowTime">time</div>


                      </div>


                      
                      
                      
                      
                      

                      

                  </div>
              </div>

     
    )
}

export default WorkHome
