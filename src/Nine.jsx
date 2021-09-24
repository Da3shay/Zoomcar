import React from 'react'
import './nine.scss'
import {n1,n2,n3,n4,n5,n6,n7,n8} from './Assets/icon'

export default function Nine() {
    return (
        <div>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" >
        <div style={{display:"flex",justifyContent:"space-between" ,margin:"0 100px"}}>
      <img src={n1} className="d-block w-20" alt="..." style={{width:"150px"}}/>
      <img src={n2} className="d-block w-20" alt="..." style={{width:"150px"}}/>
      <img src={n3} className="d-block w-20" alt="..." style={{width:"150px"}}/>
      <img src={n4} className="d-block w-20" alt="..." style={{width:"150px"}}/>
      </div>
    </div>


    <div className="carousel-item" >
        <div style={{display:"flex",justifyContent:"space-between",margin:"20px 100px" }}>
      <img src={n5}  className="d-block w-20" alt="..." style={{width:"150px"}}/>
      <img src={n6}  className="d-block w-20" alt="..." style={{width:"150px"}}/> 
      <img src={n7}  className="d-block w-20" alt="..." style={{width:"150px"}}/>
      <img src={n8}  className="d-block w-20" alt="..." style={{width:"150px"}}/>
    </div>

    </div>
   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon"  style={{backgroundColor:"black",marginRight:"50px"}} aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon " style={{backgroundColor:"black", marginLeft:"50px"}} aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            
        </div>
    )
}
