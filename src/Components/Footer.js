export const Footer = () =>{
    
    return(
      <div className="container ">
      <div className="row footer">
        <div className="col-lg-3">
          <img src="images/logo%201.png" alt="" className="logo" />
          <p>Lorem ipsum dolor sit amet consectetur. Vitae tellus nam sagittis viverra sit tincidunt laoreet. Nisl nisl tincidunt dui eleifend rhoncus. Est urna auctor odio congue. </p>
        </div>
        <div className="col-lg-9 ">
          <h2>Kết Nối Với Dental</h2>
          <div className="row">
            <div className="col-5">
            </div>
            <div className="col-7">
              <div className="head d-flex ">
                <div className="IconHead">
                  <i className="fa-solid fa-globe"></i>
                </div>	
                <div className="HeadContent">
                  <div className="HeadTitle1">Dental Address</div>
                  <div className="HeadTitle2">9999 Nguyễn Hoàng Street, Hải Châu District, Đà Nẵng City</div>
                </div>
              </div>
              <div className="head d-flex">
                <div className="IconHead">
                  <i className="fa-solid fa-phone"></i>
                </div>	
                <div className="HeadContent" >
                  <div className="HeadTitle1">0788 588 588</div>
                  <div className="HeadTitle2">Hotline for appointment</div>
                </div>
              </div>
              <div className="head d-flex ">
                <div className="IconHead">
                  <i className="fa-regular fa-clock"></i>
                </div>	
                <div className="HeadContent ">
                  <div className="HeadTitle1">Monday - Saturday</div>
                  <div className="HeadTitle2">8.AM - 8.PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>		
    </div>
    )    
}
export default Footer