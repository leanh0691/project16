import './App.css';
import  Header from './Components/Header'
import  Navbar from './Components/Navbar'
import  BannerSlider from './Components/BannerSlider'
import  Introduction from './Components/Introduction'
import  ServicesIntro from './Components/ServicesIntro'
import  DoctorIntro from './Components/DoctorIntro'
import  WorkHours from './Components/WorkHours'
import  Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
        <Header/>         
        <Navbar/>     
        <BannerSlider/>   
        <Introduction/>
        <div className="container">
          <div className="line"></div>	
        </div>
        <ServicesIntro/>
        <div className="container">
          <div className="line"></div>	
        </div> 
        <DoctorIntro/>
        <div className="container">
          <div className="line"></div>	
        </div>
        <div class="container">
          <div class="section3">
            <div class="row">
              <div class="col-12">
                <h1>Tại sao nên chọn Dental</h1>
              </div>
              <div class="col-lg-4 col-md-6 col-12 col-sm-12 order-lg-1 order-md-2 order-2">
                <div class="frame4 text-center">
                  <img src="images/icon1.png" alt="" />
                  <p>Với hơn <strong>15 năm kinh nghiệm</strong> trong nghề, nha khoa Dental đã trở thành địa chỉ chăm sóc, điều trị răng miệng được đông đảo khách hàng trong và ngoài nước lựa chọn.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-1">
                <div class="frame4 text-center">
                  <img src="images/icon1.png" alt="" />
                  <p><strong>Nha Khoa Dental</strong> là thương hiệu độc quyền được bảo hộ trên toàn lãnh thổ Việt Nam, hệ thống Nha Khoa được xây dựng khang trang, ứng dụng công nghệ hiện đại, hướng đến những người dân xa trung tâm thành phố vẫn không bị bỏ rơi, họ cũng có cơ hội hưởng được những dịch vụ nha khoa chuyên nghiệp, đúng chuẩn và hiện đại gần ngay nơi mình sinh sống.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 col-12 order-lg-3 order-md-3 order-3">
                <div class="frame4 text-center">
                  <img src="images/icon1.png" alt="" />
                  <p><strong>Nha Khoa Dental đến năm 2025:</strong> “Là chuỗi phòng nha khoa dẫn đầu Việt Nam bởi sự phục vụ tận tâm, chuyên môn giỏi và thẩm mỹ cao.”</p>
                </div>
              </div>
            </div>
          </div>
	      </div>
        <div className="container">
          <div className="line"></div>	
        </div> 
        <WorkHours/>
        <Footer/>
    </div>
  );
}

export default App;
