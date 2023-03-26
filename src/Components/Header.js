export const Header = (props) =>{
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 logo">
                <img src="images/logo%201.png" alt="" className="w-100" />
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-5 col-sm-12 col-12 ">
                    <div className="head d-flex ">
                        <div className="IconHead">
                            <i className="fa-solid fa-globe"></i>
                        </div>	
                        <div className="HeadContent">
                            <div className="HeadTitle1">Dental Address</div>
                            <div className="HeadTitle2">9999 Nguyễn Hoàng Street, Hải Châu District, Đà Nẵng City</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="head d-flex">
                        <div className="IconHead">
                            <i className="fa-solid fa-phone"></i>
                        </div>	
                        <div className="HeadContent">
                            <div className="HeadTitle1">0788 588 588</div>
                            <div className="HeadTitle2">Hotline đặt trước lịch tại phòng khám</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="head d-flex">
                        <div className="IconHead">
                            <i className="fa-regular fa-clock"></i>
                        </div>	
                        <div className="HeadContent">
                            <div className="HeadTitle1">Monday - Saturday</div>
                            <div className="HeadTitle2">8.AM - 8.PM</div>
                        </div>
                    </div>
                </div>
            </div>
	</div>
    )    
}
export default Header