import React from 'react'
import './fourth.scss'
import {carsbg,t1,t2,t3,t4} from './Assets/icon'


export default function Fourth() {
    return (
        <div>
              <div className="cars"
                style={{  backgroundImage: `url(${carsbg}  )`,
                 backgroundSize:"cover",height:"90vh"}}
                >
                    <div className="headd"> A CAR FOR EVERY NEED</div>
                    <div className="midd">We have a range of cars, so something will perfectly fit your trip</div>
                    <div>


                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
  <div className="outer">
  
  <div className="in1">

  <div> <img src={t1} alt="car" style={{width:"270px"}} /></div>

<div className="outercont">
   <h2>HATCHBACK</h2>
<h5>Price Starting at ₹ 80/hr (Fuel Free)</h5>

 <p> CARS AVAILABLE : FORD FIGO, MARUTI SWIFT, MAHINDRA KUV 100, HYUNDAI I20 ELITE, JAZZ SMT 1.5 IDTEC</p>
 </div>
   </div>
   
   </div>
  
    <h4 style={{marginTop:"80px"}}>A quick drive to sunrise point</h4>

    </div>

    
    <div className="carousel-item">
    <div className="outer">
  
  <div className="in1">

  <div> <img src={t3} alt="car" style={{width:"270px"}} /></div>

<div className="outercont">
   <h2>SUV</h2>
<h5>Price Starting at ₹ 105/hr (Fuel Free)</h5>

 <p>CARS AVAILABLE: FORD ECOSPORT, MAHINDRA SCORPIO, MAHINDRA XUV, FORD ENDEAVOUR, HYUNDAI CRETA</p>
 </div>
   </div>
   
   </div>
  
    <h4 style={{marginTop:"80px"}}>Head outstation with the entire family</h4>
 
      
    </div>
    <div className="carousel-item">
        
    <div className="outer">
  
  <div className="in1">

  <div> <img src={t4} alt="car" style={{width:"270px"}} /></div>

<div className="outercont">
   <h2>HATCHBACK</h2>
<h5>Price Starting at ₹ 80/hr (Fuel Free)</h5>

 <p> CARS AVAILABLE: FORD FIGO, MARUTI SWIFT, MAHINDRA KUV 100, HYUNDAI I20 ELITE, JAZZ SMT 1.5 IDTEC</p>
 </div>
   </div>
   
   </div>
  
    <h4 style={{marginTop:"80px"}}>A quick drive to sunrise point</h4>

    
    </div>
    <div className="carousel-item">
        
        <div className="outer">
      
      <div className="in1">
    
      <div> <img src={t2} alt="car" style={{width:"300px"}} /></div>
    
    <div className="outercont">
       <h2>SEDAN</h2>
    <h5>Price Starting at ₹ 95/hr (Fuel Free)</h5>
    
     <p> CARS AVAILABLE: HONDA CITY, MARUTI CIAZ, FORD ASPIRE</p>
     </div>
       </div>
       
       </div>
      
        <h4 style={{marginTop:"80px"}}>Grab dinner and a movie</h4>
    
        
        </div>
    


  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



                    </div>



                </div>
            
        </div>
    )
}
