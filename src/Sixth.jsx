import React from 'react'
import {bgworks,gplay,appstore} from './Assets/icon'
import './sixth.scss'

export default function Sixth() {
    return (
        <div
        style={{
            backgroundImage: `url(${bgworks}  )`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}>

            <div>

                <div className="apps sixth">
                        <div className="go">ZOOM ON THE GO!</div>
                        <div className="book">Make a booking, unlock your car, and end <br/> your reservation all from our app</div>
                        <div className="storebtn"> 

                                <span><img src={gplay} alt="google play button" style={{width:"100px",marginRight:"30px"}}/></span>
                                <span> <img src={appstore} alt="App Store" style={{width:"120px",}} /></span>
                        </div>



                </div>
            </div>
            </div>
    )
}
