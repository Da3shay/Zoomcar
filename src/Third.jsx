import React from 'react'
import './third.scss'
import {premlogo,zzpt} from './Assets/icon'

export default function Third() {
    return (
        <div>
              <div style={{display:'flex', flexDirection:"column"}}>
                <div className="thirdupper">
                    <img src="https://wallpaperaccess.com/full/45712.jpg" alt="" width="100%" height="268px"/>
                   
                    <div className="upeercontent">
                      
                    <div><img src={premlogo} alt="premium logo"  width="60px" height="70px"/></div>
                       <div className="club">SUPERMILER CLUB</div>
                       <div className="prem">Premium club which rewards you everytime you drive with us</div>
                       <div className="dashdiv">
                       <div className="linebefore"></div>
                         <div className="super">SUPERMILER PRIVILEGES </div> 
                         <div className="lineafter"></div>
                         </div>
                    </div>

                </div>
               

<div className="card zpt" style={{width: "12rem"}}>
<div className="cardtopp">
  <img src={zzpt} className="card-img-top"   style={{width:"60px",marginLeft:"auto", marginRight:"auto" }} alt="daxmc"/>
  <h5 style={{fontSize:"14px",marginTop:"10px",marginBottom:"30px"}} className="card-title">EARN Z POINTS</h5>

  </div>
  <div className="card-body">
      
   
    
  <div className="abtzpt">  <p className="card-text" style={{fontSize:"14px",color:"#323a44"}}>Earn Z-Points for every booking and redeem for additional discount.</p></div> 
    <div className="lrnbtn"><button type="button" className="btn btn-outline-success">Learn More</button></div>


  </div>
</div>
            
                <div className="thirdlower" 
                style={{
                    backgroundColor:"white"
                }}>
                </div>
            

            </div>  
        </div>
    )
}
