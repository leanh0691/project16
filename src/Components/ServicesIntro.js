import ServiceDatas from './ServiceDatas'
import ServiceCard from './ServiceCard'
import React,{useState} from 'react'

export const ServicesIntro = () =>{
    const Services = ServiceDatas.map(Service => {
        return(
        <ServiceCard 
          key={Service.id}
          Service={Service}
        />
        )
      })
    return(
       <main>
        <div className="container">
          <div className="row sectionDV">
            <div className="col-lg-8 col-md-6 col-sm-12 col-12">
              <h1>Các dịch vụ nổi bật</h1>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <button className="w-100 button1"> <a href="dich-vu.html">Tất cả dịch vụ</a></button>
            </div>
              {Services}
          </div>
        </div>
       </main>
    )    
}
export default ServicesIntro