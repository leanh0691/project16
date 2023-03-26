import React,{useState} from 'react'

export const ServiceCard = (props) =>{
    const [contact,setContact] = useState(props.Service)
	function Checkcontact(){
		setContact(() => {
			return {
		}
		}	
		)
	}
    return(
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="srvice">
                <img src={props.Service.img} alt="" className="w-100 img1" />
                <div className="icon">
                    <img src="images/d5.png" alt="" className="img2" />
                </div>
                <h2>Chỉnh Nha</h2>
                <p>Giúp điều chỉnh các răng về lại đúng hướng và vị trí giúp cải thiện khả năng ăn nhai và mang lại nụ cười đẹp hơn.</p>
            </div>
        </div>

    )    
}
export default ServiceCard