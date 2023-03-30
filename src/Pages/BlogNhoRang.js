import React from 'react';


const BlogNhoRang = () => {
return(
  <div>
	<div className="container-fluid px-0">
		<div className="Banner2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-8 cal-sm-12 BG2">
						<p><span><i className="fa-solid fa-tag"></i></span>Nhổ Răng</p>
						<h1>Chuyên Mục: Nhổ Răng » Dental</h1>
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
							<img src="images/Rang-khon-moc-o-dau-Tai-sao-nen-nho-bo.jpg" alt="" className="w-100 mb-3"/>
							<p><span><i className="fa-solid fa-tag"></i></span> Nhổ Răng <br/> <span><i className="fa-regular fa-comment"></i></span> Comment</p>
							<h2>Nên nhổ bỏ răng khôn khi nào?</h2>
							<p>Đau răng khôn luôn là vấn đề mà nhiều người gặp phải. Trong trường hợp này, các nha sĩ luôn khuyên chúng ta nên nhổ bỏ răng khôn để giải quyết tình trạng này. Vậy tại sao phải nhổ răng khôn? Hãy cùng Nha khoa Dana tìm hiểu trong bài viết này nhé! Răng khôn...</p>
							<button className="button1"><a href="BlogNhoRangBlog1">Tiếp Tục Tìm Hiểu</a></button>
						</div>							
						<div className="line"></div>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
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

export default BlogNhoRang;