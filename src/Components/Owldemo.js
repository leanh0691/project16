import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import CustomerDatas from './CustomerDatas';
import CustomerComment from './CustomerComment'
export const OwlDemo = () => {  
  const Comments = CustomerDatas.map(Customer => {
    return(
    <CustomerComment 
      key={Customer.id}
      Customer={Customer}
    />
    )
  })
  return (  
    <div>  
      <div class='container-fluid' >   
        <OwlCarousel items={2}
        autoplay ={true} 
        className="owl-theme"  
        loop  
        nav>  
        {Comments}
      </OwlCarousel>  
      </div> 
    </div>  
  )  
}
        
  
export default OwlDemo  
