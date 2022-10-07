
 
import React from "react";
import{FaCheck} from 'react-icons/fa';
import{FaTimes} from 'react-icons/fa';



function Card(probs){
   return( <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{probs.card.planName}</h5>
        <h6 class="card-price text-center">{probs.card.feature}<span class="period">/month</span></h6>
        <hr></hr>
        <ul>
            {
                probs.card.detailes.map((item)=>{
                    
                    
                 return item.isEnabled ?<li><span><FaCheck/></span>{item.name}</li>:<li class="text-muted"><span><FaTimes/></span>{item.name}</li>


                })}
    
              </ul>
 
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>  
   ); 
}
export default Card;