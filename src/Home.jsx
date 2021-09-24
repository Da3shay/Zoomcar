import React from 'react'
import './home.scss'
import { background } from './Assets/icon'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eight from './Eight'
import Nine from './Nine'
import Ten from './Ten'

import {c1,c2,c3,c4,c5,c6,thirdbg,premlogo,zzpt,w1,w2,w3,w4,w5,bgworks,gplay,appstore,e1,e2,e3,e4,e5,quotes,dq,n1,n2,n3,n4,n5,n6,n7,n8,l1,l2,l3,l4,carsbg,t1,t2,t3,t4} from './Assets/icon'


export default function Home() {
    return (
        <div>
            <section className="main-sections first"
            style={{
          
                backgroundImage: `url(${background}  )`,opacity:0.94,backgroundPosition: "0 50%",
            }}
            >
                <First/>
              
        

            </section>
            <section className="main-sections second">
                <Second/>

               

            </section>



            <section className="main-sections third " >
                <Third/>
               
          
         


`           </section>
           
           
            <section className="main-sections fourth">
                <Fourth/>

              



        



            </section>
            <section className="main-sections fifth ">
                <Fifth/>

              

            </section>
            <section className="main-sections sixth ">
                <Sixth/>
         


            </section>
            <section className="main-sections seventh">
                <Seventh/>
             
            </section>
            
            <section
             style={{
                backgroundImage: `url(${quotes}  )`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"

            }}


            className="main-sections eight">
                <Eight/>



            </section>

            <section className="main-sections nine" >
                <Nine/>
         
            </section>

<section className="main-sections ten">
    <Ten/>
  


</section>



      
        </div>
    )
}
