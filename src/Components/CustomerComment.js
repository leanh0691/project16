import React from "react";

export const CunstomerComment = (props) =>{
    const [contact,setContact] = React.useState(props.Doctor)
	function Checkcontact(){
		setContact(() => {
			return {
		}
		}
		)
	}
    return(
		<div className="col-lg-3 col-md-6 col-sm-12 col-12">
			<div className="card">
				
				{props.Doctor.openSpots!=="Tạm vắng" ? <div className="openSpots">Thu {props.Doctor.openSpots}</div> : <div className="openSpots">{props.Doctor.openSpots}</div>}
				<div className="info">
					<img className="photo w-100" src={props.Doctor.img} alt="" />
					<h4 className="name">{props.Doctor.name}</h4>
					<div className="row">
						<div className="col-6 social-acc ps-3 pe-1">
							<button className="w-100">Email</button>
						</div>
						<div className="col-6 social-acc ps-1 pe-3">
							<button className="w-100">Linkedln</button>
						</div>
					</div>
				</div>
				<div className="about">
					<h4>Chuyên môn</h4>
					<p>{props.Doctor.describe}</p>
					<h4> Liên hệ: {props.Doctor.contact}</h4>
					<p></p>
				</div>
				<div className="sociaLink">
					<a href="#"><i className="header-icon fa-brands fa-facebook-f"></i></a>
					<a href="#"><i className="fa-brands fa-instagram"></i></a>
					<a href="#"><i className="fa-brands fa-twitter"></i></a>
					
				</div>
				<div className="social-icons"></div>
			</div>
		</div>

    )    
}
export default CunstomerComment