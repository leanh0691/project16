import React from 'react';


const BlogDanMatSu = () => {
return(
  <div>
		<div className="container-fluid px-0">
		<div className="Banner2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-8 cal-sm-12 BG2">
						<p><span><i className="fa-solid fa-tag"></i></span>Mặt Dán Sứ</p>
						<h1>Chuyên Mục: Mặt Dán Sứ » Dental</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="container">
		<div className="BlogNhaKhoa">
			<div className="row">
				<div className="col-lg-8 col-md-8 col-sm-12 col-12">
					<div className="row">
						<div className="col-lg-2 col-md-2 col-sm-12 col-12 text-center BlogNhaKhoaIconBlog">
							<img src="images/logo.png" alt="" className="w-100"/>
							<p>By Nha Khoa Dental</p>
							<p>27/11/2022</p>
						</div>
						<div className="col-lg-10 col-md-10 col-sm-12 col-12">
							<img src="images/CAC-BUOC-CUA-QUY-TRINH-Boc-rang-su-VENEER-HOAN-2.png" alt="" className="w-100 mb-3"/>
							<p><span><i className="fa-solid fa-tag"></i></span> Mặt Dán Sứ <br/> <span><i className="fa-regular fa-comment"></i></span> Comment</p>
							<h2>Các bước của quy trình làm mặt dán sứ Veneer tiêu chuẩn</h2>
							<p>Nếu bạn đang tìm cho mình một dịch vụ làm răng sứ thẩm mỹ không cần phải mài thân răng quá nhiều mà vẫn đảm bảo chức năng ăn nhai cũng như tính thẩm mỹ cho răng thì Veneer là phương pháp thẩm mỹ răng tốt nhất dành cho bạn. Trong bài viết này, Nha...</p>
							<button className="button1"><a href="BlogDanMatSuBlog1">Tiếp Tục Tìm Hiểu</a></button>
						</div>							
						<div className="line"></div>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-4 col-sm-12 col-12">
					<div className="BlogMenu">
						<input type="text" placeholder="Tim kiem ..."/>
						<h3>Bài viết mới nhất</h3>
						<div className="line"></div>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-12 col-12 pe-0">
								<img src="images/phong-x-quang-dana-dental-1280x640.jpg" alt="" className="w-100"/>
							</div>
							<div className="col-8 col-md-8 col-sm-12 col-12">
								<p>CT Cone Beam 3D – Tiêu chuẩn của một Nha khoa Kỹ thuật cao</p>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-12 pe-0 pt-3">
								<img src="images/trong-rang-implant.jpg" alt="" className="w-100"/>
							</div>
							<div className="col-8 col-md-8 col-sm-12 col-12 pt-3">
								<p>Sau khi nhổ răng bao lâu thì trồng Implant được?</p>
							</div>
						</div>
						<h3>Categories</h3>
						<div className="line"></div>
						<button className="w-100 dropdown pb-0">
							<a  className="nav-link dropdown-toggle text-capitalize" data-bs-toggle="dropdown">Select Category</a>
							<ul className="dropdown-menu mt-1" >
								<li className="dropdown-item"><a href="BlogRangImplant">Trồng Răng Implant</a></li>
								<li className="dropdown-item"><a href="BlogNiengRang">Niềng Răng</a></li>
								<li className="dropdown-item"><a href="BlogDanMatSu">Dán Sứ Veneer</a></li>
								<li className="dropdown-item"><a href="BlogBocRangSu">Bọc Răng Sứ</a></li>
								<li className="dropdown-item"><a href="BlogNhoRang">Nhổ Răng</a></li>
								<li className="dropdown-item"><a href="BlogHanTramRang">Hàn - Trám Răng</a></li>
								<li className="dropdown-item"><a href="BlogTayTrangRang">Tẩy Trắng Răng</a></li>
								<li className="dropdown-item"><a href="BlogDieuTriTuy">Điều Trị Tuỷ</a></li>
							</ul>
						</button>
					</div> 
				</div>	
			</div>
		</div>
	</div>
  </div>);
};

export default BlogDanMatSu;