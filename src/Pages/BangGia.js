import React from 'react';


const BangGia = () => {
return(
  <div>
	<div className="container-fluid px-0">
		<div className="Banner2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-sm-12 col-12 BG2">
						<h1>Bảng Giá</h1>
						<p>Dưới đây là bảng giá dịch vụ tại Nha Khoa Dana. Chúng tôi cung cấp bảng giá một cách chi tiết và rõ ràng giúp quý khách hiểu rõ hơn từng giá dịch vụ. Ngoài ra chi phí có thể thay đổi một chút do các chương trình ưu đãi khuyến mãi, muốn biết chính xác xin mời tới Dana Dental để được các Bác sĩ tư vấn cụ thể.</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	<div className="container">
		<div className="BGiaContent">
			<div className="row">
				<div className="col-lg-12 col-12 ">
					<h2>Bảng giá dịch vụ chi tiết tại</h2>
					<h1>Dental</h1>
					<p>Mức giá tại Nha Khoa Dana nói rẻ cũng không phải rẻ, nói mắc cũng không mắc mà là giá cả phù hợp. Phù hợp với những vật liệu cao cấp, máy móc hiện đại phục vụ khách hàng trong quá trình điều trị. Phù hợp với dịch vụ, không gian chuẩn 5 sao. Phù hợp với tay nghề Bác sĩ chuyên gia ở Sài Gòn về trên 10 năm kinh nghiệm. Và còn rất rất nhiều cái mà khi khách hàng tới với chúng tôi chỉ có khen chứ không chê bất cứ điều gì nữa.</p>
				</div>
				<div className="col-12 mt-4 px-0">
					<div>
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#t1">Nha Khoa Tổng Quát</button>
							</li>
							<li className="nav-item">
								<button className="nav-link"  data-bs-toggle="tab" data-bs-target="#t2">Nha Khoa Thẩm Mỹ</button>
							</li>
							<li className="nav-item">
								<button className="nav-link"  data-bs-toggle="tab" data-bs-target="#t3">Trồng Răng Implant</button>
							</li>
							<li className="nav-item">
								<button className="nav-link"  data-bs-toggle="tab" data-bs-target="#t4">Niềng Răng</button>
							</li>
							<li className="nav-item">
								<button className="nav-link"  data-bs-toggle="tab" data-bs-target="#t5">Phẫu Thuật</button>
							</li>
						</ul>
						<div className="tab-content pt-3">
							<div className="tab-pane active" id="t1">
								<div className="container px-0">
									<div className="row">
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Khám và Tư vấn</p></div>
													<div className="col-6"><h3 className="text-end pe-5">Miễn phí</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Chụp phim toàn hàm Panorama</p></div>
													<div className="col-6"><h3 className="text-end pe-5">100.000 / 1 Phim</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Chụp phim Cephalometric</p></div>
													<div className="col-6"><h3 className="text-end pe-5">100.000 / 1 Phim</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Chụp phim CT Conebeam</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Cạo vôi răng, đánh bóng định kỳ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Cạo vôi răng, đánh bóng 1 lần</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Cạo vôi răng, đánh bóng 2 lần</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Trám thẩm mỹ răng sau mặt nhai</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000 / 1 Răng</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Trám thẩm mỹ răng sau mặt bên</p></div>
													<div className="col-6"><h3 className="text-end pe-5">400.000 / 1 Răng</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Trám mòn cổ răng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">300.000 / 1 Răng</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Trám thẩm mỹ răng trước</p></div>
													<div className="col-6"><h3 className="text-end pe-5">500.000 / 1 Răng</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Đắp mặt răng, kẽ răng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">800.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Che tuỷ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">500.000 / 1 Răng</h3></div>
													<div className="col-12 line2"></div>
												</li>

												<li className="row">
													<div className="col-6"><p className="text-start">Đóng chốt trám răng đã chữa tuỷ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">1.000.000 / 1 Răng</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Đính đá trên răng – Đá của khách hàng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">300.000 / 1 Răng</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="t2">
								<div className="container px-0">
									<div className="row">
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Tẩy trắng răng tại nhà</p></div>
													<div className="col-6"><h3 className="text-end pe-5">16.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Tẩy trắng răng tại phòng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Tẩy trắng răng tại phòng + Tại nhà</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Ép máng tẩy trắng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Thuốc tẩy trắng răng tại nhà</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Thiết kế nụ cười - Digital Smile Design</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Mặt dán sứ Veneer IPS Emax Multi</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Mặt dán sứ Veneer IPS Emax Press Multi</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Inlay - Onlay Composite</p></div>
													<div className="col-6"><h3 className="text-end pe-5">5.000.000 / 1 Đv ghép</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Inlay - Onlay Sứ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Răng sứ kim loại Cr - Co</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Răng sứ kim loại Titanium</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Răng sứ kim loại Quý</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Răng toàn sứ Zirconia Cercon</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>

												<li className="row">
													<div className="col-6"><p className="text-start">Răng toàn sứ Zirconia DD.Bio</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Răng toàn sứ IPS Emax Press</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Răng toàn sứ Zirconia Lava+ 3M</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="t3">
								<div className="container px-0">
									<div className="row">
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Trọn gói Implant Hiossen - Hàn Quốc</p></div>
													<div className="col-6"><h3 className="text-end pe-5">16.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Trọn gói Implant ETK - Pháp</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Trọn gói Implant Straumann - Thuỵ Sỹ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Trọn gói Implant Toàn hàm  Basic</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Trọn gói Implant Toàn hàm Advanced</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Trọn gói Implant Toàn hàm  Premium</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Ghép xương + màng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">5.000.000 / 1 Đv ghép</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Ghép màng PRF</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Ghép biểu mô và mô liên kết nướu</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nâng xoang kín</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Nâng xoang hở</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Customized Abutment</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>

												<li className="row">
													<div className="col-6"><p className="text-start">Customized Abutment Zirconia</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Phục hình bắt vít trên Multi</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="t4">
								<div className="container px-0">
									<div className="row">
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Niềng răng mắc cài kim loại mức độ dễ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">16.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Niềng răng mắc cài kim loại mức độ trung bình</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Niềng răng mắc cài kim loại mức độ khó</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Mắc cài sứ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Mắc cài tự gài</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Kéo đóng khoảng R6,7</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Niềng răng trong suốt Invisalign Lite</p></div>
													<div className="col-6"><h3 className="text-end pe-5">5.000.000 / 1 Đv ghép</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Niềng răng trong suốt Invisalign Moderate Level 1</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Niềng răng trong suốt Invisalign Moderate Level 2</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Niềng răng trong suốt Invisalign Full Level 1</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Niềng răng trong suốt Invisalign Full Level 2</p></div>
													<div className="col-6"><h3 className="text-end pe-5">Điều trị rối loạn khớp thái dương hàm bằng máng</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Tạo khoảng phục hình</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>

												<li className="row">
													<div className="col-6"><p className="text-start">Đánh lún răng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Hàm duy trì chỉnh nha</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane" id="t5">
								<div className="container px-0">
									<div className="row">
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng cửa vĩnh viễn</p></div>
													<div className="col-6"><h3 className="text-end pe-5">16.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng sau vĩnh viễn</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ chân răng còn sót lại</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng đã điều trị tuỷ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Xử lý ổ răng nhiễm trùng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng khôn hàm trên dễ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
										<div className="col-lg-6 col-md-12 col-12">
											<ul>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng khôn hàm trên khó</p></div>
													<div className="col-6"><h3 className="text-end pe-5">5.000.000 / 1 Đv ghép</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng khôn tiểu phẫu hàm dưới dễ</p></div>
													<div className="col-6"><h3 className="text-end pe-5">20.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng khôn tiểu phẫu hàm dưới khó</p></div>
													<div className="col-6"><h3 className="text-end pe-5">35.000.000 / 1 Trụ</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng tiểu phẫu mọc ngầm dưới xương</p></div>
													<div className="col-6"><h3 className="text-end pe-5">120.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li><li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng tiểu phẫu mọc ngầm dưới xương cực khó</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng bằng máy siêu âm Piezotome</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>

												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng kết hợp ghép xương và màng</p></div>
													<div className="col-6"><h3 className="text-end pe-5">150.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
												<li className="row">
													<div className="col-6"><p className="text-start">Nhổ răng sữa</p></div>
													<div className="col-6"><h3 className="text-end pe-5">200.000.000 / 1 Hàm</h3></div>
													<div className="col-12 line2"></div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="col-12 line">
	</div>	
	<div className="container">
		<div className="BGiaGoi">
			<div className="row">
				<div className="col-lg-7 col-md-12 col-12">
					<h2>Chọn gói</h2>
					<h1>Implant Toàn Hàm</h1>
				</div>
				<div className="col-lg-6 col-md-12 col-12">
					<p>Hàm giả tháo lắp đang là phương pháp được nhiều người sử dụng khi mất răng. Tuy nhiên, phương án này tồn tại nhiều bất cập, như không khắc phục được tình trạng tiêu xương hàm gây hóp má, lão hóa sớm vùng mặt, dễ rơi rớt khi sử dụng, gây đau nhức, hôi miệng. Đồng thời chức năng ăn nhai không đảm bảo, gây ảnh hưởng lớn đến hệ tiêu hóa, dẫn đến các bệnh lý nghiêm trọng về dạ dày, các vấn đề về tim mạch…</p>
					<p>Trồng răng Implant toàn hàm: All on 4, All on 5, All on 6 được công nhận là những kỹ thuật trồng răng toàn hàm tốt và tiết kiệm chi phí nhất hiện nay. Khắc phục toàn diện trường hợp mất răng toàn hàm, thiếu hổng xương hoặc xương hàm quá yếu. Phục hồi lại tính thẩm mỹ cao, cải thiện phát âm, đồng thời ngăn ngừa hiệu quả tình trạng tiêu xương hàm và khôi phục chức năng ăn nhai đạt như răng thật.</p>
				</div>
				<div className="col-lg-6 col-md-12 col-12">
					<p>Phục hình toàn hàm (All on) được chia làm 2 phần là phần trụ Implant phía dưới và phục hình cố định răng phía trên trụ Implant. <br />Implant tại Dental hiện tại có 3 dòng chính là: Implant Hàn Quốc (Hiossen, Dentium, Neo Biotech, Dio); Implant Pháp, Mỹ (Tekka, ETK); Implant Đức, Thuỵ Sỹ (Straumann, Mis C1)</p>

					<p>Phần phục hình cố định răng bắt vít trên trụ Implant tại Dana Dental cũng bao gồm 3 loại chính: Phục hình răng nhựa cường lực trên thanh Bar; Phục hình răng sứ trên hàm khung Titanium; Phục hình răng sứ trên hàm khung sinh học BioHPP.

					<br/>Các gói Implant toàn hàm tại Dana Dental – Nha Khoa Đà Nẵng ở phía dưới là sử dụng Implant ETK của Pháp và Phục hình răng sứ trên hàm khung Titanium.</p>
				</div>
				<div className="col-lg-4 col-md-12 col-12">
					<div className="frame4 px-3 pb-2">
						<img src="images/icon1.png" alt="" />
						<h1 className="text-center">120.000.000 VND</h1>
						<h3 className="text-center">Implant toàn hàm Basic</h3>
						<p>Trồng răng giả cố định Implant toàn hàm hoạt động giống như răng tự nhiên và có thể được làm sạch và chăm sóc theo cùng một cách. Đặc biệt, All on 4 được lắp cố định và không phải tháo ra mỗi đêm để làm sạch giống như cách mà các răng giả truyền thống phải làm.</p>
						<div className="line"></div>
						<ul className="ps-2 ms-3">
							<li>All on 4 + 12 Răng</li>
							<li>4 Trụ Implant ETK chuẩn Pháp trị giá 80.000.000</li>
							<li>Phục hình toàn hàm bắt vít 12 Răng sứ trên Multi trị giá 40.000.000</li>
							<li>Miễn phí chụp phim CT Conebeam 3D</li>
							<li>Miễn phí xét nghiệm trước khi phẫu thuật</li>
							<li>Miễn phí nhổ răng và điều chỉnh xương ổ</li>
						</ul>
					</div>
					
					<button className="button1 mt-3 w-100"><a href="">Đặt Lịch Ngay</a></button>
				</div>
				<div className="col-lg-4 col-md-12 col-12" id="BGiaGoi2">
					<div className="frame4 px-3 pb-2">
						<img src="images/icon1.png" alt="" />
						<h1 className="text-center">150.000.000 VND</h1>
						<h3 className="text-center">Implant toàn hàm Advanced</h3>
						<p>Trồng răng giả cố định Implant toàn hàm hoạt động giống như răng tự nhiên và có thể được làm sạch và chăm sóc theo cùng một cách. Đặc biệt, All on 4 được lắp cố định và không phải tháo ra mỗi đêm để làm sạch giống như cách mà các răng giả truyền thống phải làm.</p>
						<div className="line"></div>
						<ul className="ps-2 ms-3">
							<li>All on 5 + 12 Răng</li>
							<li>5 Trụ Implant ETK chuẩn Pháp trị giá 80.000.000</li>
							<li>Phục hình toàn hàm bắt vít 14 Răng sứ trên Multi trị giá 50.000.000</li>
							<li>Miễn phí chụp phim CT Conebeam 3D</li>
							<li>Miễn phí xét nghiệm trước khi phẫu thuật</li>
							<li>Miễn phí nhổ răng và điều chỉnh xương ổ</li>
						</ul>
					</div>
					
					<button className="button1 mt-3 w-100"><a href="">Đặt Lịch Ngay</a></button>
				</div>
				<div className="col-lg-4 col-md-12 col-12">
					<div className="frame4 px-3 pb-2">
						<img src="images/icon1.png" alt="" />
						<h1 className="text-center">250.000.000 VND</h1>
						<h3 className="text-center">Implant toàn hàm Premium</h3>
						<p>Chăm sóc nha khoa toàn diện cho một người, phục vụ mọi nhu cầu của bạn. Bạn nên liên hệ với chúng tôi để biết thêm chi tiết.</p>
						<div className="line"></div>
						<ul className="ps-2 ms-3">
							<li>All on 6 + 14 Răng</li>
							<li>6 Trụ Implant ETK chuẩn Pháp trị giá 120.000.000</li>
							<li>Phục hình toàn hàm bắt vít 14 Răng sứ trên Multi trị giá 60.000.000</li>
							<li>Miễn phí chụp phim CT Conebeam 3D</li>
							<li>Miễn phí xét nghiệm trước khi phẫu thuật</li>
							<li>Miễn phí nhổ răng và điều chỉnh xương ổ</li>
							<li>Voucher trị giá 10 triệu đồng chi phí ghép xương, nâng xoang</li>
							<li>Miễn phí chi phí làm răng tạm</li>
							<li>Miễn phí đưa đón và ở khách sạn trong quá trình điều trị</li>
						</ul>
					</div>
					
					<button className="button1 mt-3 w-100"><a href="">Đặt Lịch Ngay</a></button>
				</div>
			</div>
		</div>
	</div>
  </div>);
};

export default BangGia;