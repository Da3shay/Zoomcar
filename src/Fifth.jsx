import React from 'react'
import './fifth.scss'
import {w1,w2,w3,w4,w5,} from './Assets/icon'

export default function Fifth() {
    return (
        <div>
              <div className="works">
                <div className="how">HOW ZOOMCAR WORKS</div>
                <div className="drive"> Drive yourself to an adventure and back in 5 simple steps</div>
                <div>
                    
                <div className="allcard">
                        <div className="card" >
                            <img src={w1} alt="logo" />
                            <h5>BOOK</h5>
                           <p>Search for and book a car on our site!</p>

                        </div>
                        <div className="card">
                        <img src={w2} alt="logo" />
                        <h5>UPLOAD LICENSE</h5>
                           <p>Upload your driver’s license, and pay a small security deposit.</p>

                        </div>
                        <div className="card">
                        <img src={w3} alt="logo" />
                        <h5>UNLOCK</h5>
                          <p>We SMS your car details 20 minutes before pickup.Unlock it via the Zoomcar app.</p>
                          </div>
                        <div className="card">
                        <img src={w4} alt="logo" />
                        <h5>ZOOM</h5>
                           <p>Fill the start checklist in the Zoomcar app. Grab the keys from the glove-box and drive.</p>
                        </div>
                        <div className="card">
                        <img src={w5} alt="logo" />
                        <h5>RETURN</h5>
                            <p>Return the car to the same location and fill the end checklist to end your trip.</p>

                        </div>
        </div>


                </div>
                <div>
                    
                <div className="signbtn"><button type="button" className="btn btn-outline-success">Sign Up</button></div>
                    
                    </div>  

                </div> 
        </div>
    )
}
