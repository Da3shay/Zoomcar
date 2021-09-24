import React from 'react'
import { logo } from './Assets/icon'
import './navbar.scss'

export default function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light "
           style={{
               backgroundColor:"#33414f",
               height:'max-content'
           
           }}
           >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" width ="120px"  />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <div>
      <ul className="navbar-nav"
     
      >
        <li   className="nav-item">
          <a 
          style={{color:'white'}}
          className="nav-link active offer"  aria-current="page" href="#">OFFERS</a>
        </li>
        <li className="nav-item">
          <a
          style={{color:'white'}}
          className="nav-link active" aria-current="page" href="#">SUBSCRIPTION</a>
        </li> <li className="nav-item">
          <a 
          style={{color:'white'}}
          className="nav-link active" aria-current="page" href="#">AMIGO</a>
        </li> 
        <li className="nav-item">
          <a
          style={{color:'white'}}
          className="nav-link active" aria-current="page" href="#">ZMS</a>
        </li>
        <li className="nav-item">
          <a 
          style={{color:'white'}}
          className="nav-link active" aria-current="page" href="#">MOBILE APP</a>
        </li>
        <li className="nav-item">
          <a 
          style={{color:'white'}}
          className="nav-link active" aria-current="page" href="#">SIGN UP</a>
        </li>
        <li className="nav-item">
          <a 
          style={{color:'white'}}
          className="nav-link active" aria-current="page" href="#">LOGIN</a>
        </li>
       
        
      </ul>
      </div>
    </div>
  </div>
</nav> 
        </div>
    )
}
