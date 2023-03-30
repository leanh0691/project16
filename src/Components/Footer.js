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
          <div class="col-5">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.922023061346!2d106.65571600198746!3d10.755240984186438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efa87dc6d6d%3A0x4feb0a1e755b6d62!2sUniversity%20Medical%20Center!5e0!3m2!1sen!2s!4v1668934864029!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-100"></iframe>
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