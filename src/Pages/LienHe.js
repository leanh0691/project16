import React from 'react';
import  WorkHours from './../Components/WorkHours'
import  DoctorIntro from './../Components/DoctorIntro'


const LienHe = () => {
return(
  <div>
	<div className="container-fluid px-0">
		<div className="Banner2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12 col-12 BG2">
						<h1>Liên Hệ</h1>
						<p>Để được gặp các bác sĩ chuyên khoa, trước tiên bạn cần liên hệ và đặt lịch hẹn trước với Dental – Nha khoa. Điều này giúp bạn chủ động hơn về thời gian đến thăm khám.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="container">
		<div className="LienHe">
			<div className="row">
				<div className="offset-lg-2 col-lg-8 text-center">
					<h1>Liên hệ Nha khoa Dental</h1>
					<p>Để được gặp các bác sĩ chuyên khoa, trước tiên bạn cần liên hệ và đặt lịch hẹn trước với Dana Dental – Nha khoa Đà Nẵng. Điều này giúp bạn chủ động hơn về thời gian đến thăm khám.</p>
				</div>
				<div className="col-3">
					<div className="head text-center">
						<div className="IconHead">
							<i className="fa-solid fa-phone"></i>
						</div>	
						<div className="HeadContent">
							<h3>Số Hotline</h3>
							<p className="mb-0">0788 588 588</p>
							<p>Gọi chúng tôi bất kỳ thời gian nào</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="head text-center">
						<div className="IconHead">
							<i className="fa-solid fa-globe"></i>
						</div>	
						<div className="HeadContent">
							<h3>Địa Chỉ</h3>
							<p>9999 Nguyễn Hoàng Street, Hải Châu District, Đà Nẵng City</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="head text-center">
						<div className="IconHead">
							<i className="fa-regular fa-clock"></i>
						</div>	
						<div className="HeadContent">
							<h3>Giờ Làm Việc</h3>
							<p className="mb-0">Thứ Hai - Thứ Bảy</p>
							<p>8.AM - 8.PM</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="head text-center">
						<div className="IconHead">
							<i className="fa-solid fa-globe"></i>
						</div>	
						<div className="HeadContent">
							<h3>email</h3>
							<p className="mb-0">cskh@nhakhoa.com</p>
							<p>dental.vn@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="container">
		<div className="line"></div>	
	</div>
	<DoctorIntro/>
	<div className="container">
		<div className="line"></div>	
	</div>
	<WorkHours/>
  </div>);
};

export default LienHe;