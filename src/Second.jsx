import React from 'react'
import './second.scss'
import {c1,c2,c3,c4,c5,c6,} from './Assets/icon'

export default function Second() {
    return (
        <div>
              <div className="secondall">
                    <div style={{color:'#666666', fontSize:'20px', fontWeight:"bold"}}> THE ZOOMCAR ADVANTAGE</div>
                    <div style={{fontSize:"14px", margin:"15px 0"}}> We simplified car rentals, so you can focus on what's important to you.</div>
                    <div>
        <div className="allcard">
                        <div className="card" >
                            <img src={c1} alt="logo" />
                            <h5>Fuel Cost Included</h5>
                            <p>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>

                        </div>
                        <div className="card">
                        <img src={c2} alt="logo" />
                        <h5>No Hidden Charges</h5>
                            <p>Our prices include taxes and insurance.
                                <br />
                                What you see is what you really pay!</p>

                        </div>
                        <div className="card">
                        <img src={c3} alt="logo" />
                        <h5>Flexi Pricing Packages</h5>
                            <p>One size never fits all! Choose a balance of time and kilometers that works best for you.</p>
                        </div>
        </div>
        <div className="allcard">
                        <div className="card">
                        <img src={c4} alt="logo" />
                        <h5>Go Anywhere</h5>
                            <p>Our cars have all-India permits.Just remember to pay state tolls and entry taxes.</p>
                        </div>
                        <div className="card">
                        <img src={c5} alt="logo" />
                        <h5>24x7 Roadside Assistance</h5>
                          <p>We have round-the-clock, pan India partners. Help is never far away from you.</p>
                        </div>
                        <div className="card">
                        <img src={c6} alt="logo" />
                        <h5>Damage Insurance</h5>
                         <p>All your bookings include damage insurance! Drive safe, but don’t worry!</p>
                            </div> 
         </div>   

                    </div>



                </div>
        </div>
    )
}
