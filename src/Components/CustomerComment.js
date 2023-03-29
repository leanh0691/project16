import React from "react";

export const CunstomerComment = (props) =>{
    const [comment,setComment] = React.useState(props.Customer)
	function CheckComment(){
		setComment(() => {
			return {
		}
		}
		)
	}
    return(
		<div className="row comment" >
			<div className="col-4 text-center">
				<img src={props.Customer.img} alt="" className="KH-img" />
			</div>
			<div className="col-8">
				<h3>{props.Customer.name}</h3>
				<p>{props.Customer.service}</p>
			</div>
			<div className="col-12 ">
				<p>{props.Customer.comment}</p>
			</div> 
		</div>
    )    
}
export default CunstomerComment