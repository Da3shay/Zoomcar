import React from 'react'
import './seventh.scss'
import {e1,e2,e3,e4,e5} from './Assets/icon'

export default function Seventh() {
    return (
        <div>
              <div className="seventh">
                <div className="exp">
                    <div>
                        <img src={e1} alt="review"  style={{margin:"35px 0",width:"80px"}}/>
                        <h2>3,000+</h2>
                    
                    <p>Rides Daily</p>
                    </div>
                    <div>
                    <img src={e2} alt="review"style={{margin:"35px 0",width:"85px"}} />
                         <h2>48,00,000+</h2>
                    <p>Happy users</p>
                    </div>
                    <div> 
                    <img src={e3} alt="review"style={{margin:"35px 0",width:"95px"}} />
                        <h2>36,00,00,000+</h2>
                    <p>Km Travelled
            <br />
(enough for 470 round trips to the moon!)</p>
                    </div>
                       <div>
                       <img src={e4} alt="review"style={{margin:"35px 0",width:"80px"}} />
                           <h2>6,500+</h2>
                       <p>Number of Zoomcars</p>
                       </div>
                       <div>
                       <img src={e5} alt="review"style={{margin:"45px 0",width:"200px"}} />
                            <h2>Rating 4.7/5.0 </h2>
                       <p>Rated by 3,00,000+ customers
                           <br />

over 10,00,000+ bookings</p>
                       </div> 



                </div>
            
                </div>
            
        </div>
    )
}
