import React from 'react'
import  { useState } from 'react';
import "./profile.css"
import Footer from './Footer'
export default function Profile() {
    const [requestStatus, setRequestStatus] = useState(' Request ');
    const handleRequestClick = () => {
        setRequestStatus('Requested');
      };
  return (
      <>
      <div className='upper'>
      <h1 className="hp">Code - Collaborate - Learn - Grow</h1>
     <div className="main_p">
            <div className="card_p">
                <div className="card_n">
                        <div className="photo">

                        </div>
                   <h3>Raj from mirzapur</h3>
                   <button className="reg">Contact</button>
                 </div>
                <div>
                        <div className="info">
                            <h1 className="ui">
                                UI/UX Designer
                            </h1>
                          <div className="deta">  
                            <h2>
                                Gfg rank : 1400
                            </h2>
                            <h2>
                                Leetcode rank : 1400
                            </h2>
                            <h2>
                               Language : Java
                            </h2>
                         </div>
                         <button className="reg">Request</button>

                        </div>
                </div>
               
            </div>
            <div className="card_p">
                <div className="card_n">
                        <div className="photo">

                        </div>
                   <h3>Raj from mirzapur</h3>
                   <button className="reg">Contact</button>
                 </div>
                <div>
                        <div className="info">
                            <h1 className="ui">
                                UI/UX Designer
                            </h1>
                          <div className="deta">  
                            <h2>
                                Gfg rank : 1400
                            </h2>
                            <h2>
                                Leetcode rank : 1400
                            </h2>
                            <h2>
                               Language : Java
                            </h2>
                         </div>
                         <button className="reg">Request</button>
                        </div>
                </div>
            </div>
     </div>
     </div>
   <Footer/>
      </>
      
  )
}
