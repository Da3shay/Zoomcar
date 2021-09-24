import React from 'react'
import './ten.scss'
import {l1,l2,l3,l4,} from './Assets/icon'

export default function Ten() {
    return (
        <div>
              <div className="linkss" >
                <div className="el" >
                    <img src={l1} alt="links" style={{width:"168px",marginLeft:"auto",marginRight:"auto"}} />
                  </div>
                    <div className="el">
                <img src={l2} alt="links" style={{width:"138px",marginLeft:"auto",marginRight:"auto"}} />
                  </div>
                    <div className="el">
                <img src={l3} alt="links"style={{width:"142px",marginLeft:"auto",marginRight:"auto"}} />
                   </div>
                    <div className="el" >
                <img src={l4} alt="links" style={{width:"146px",marginLeft:"auto",marginRight:"auto"}} />
                  </div>

    </div>

            
        </div>
    )
}
