export const navbar = () =>{
    return(
	<div className="container-fluid px-0">
		<nav className="navbar navbar-expand-lg navbar-light ">
			<button className="navbar-toggler ms-2" data-bs-target="#menu" data-bs-toggle="collapse">
				<a href="#c"><span className="navbar-toggler-icon"></span></a>
			</button>
			<div  className="collapse navbar-collapse " id="menu">
				<div className="container">
					<ul className=" nav navbar-nav d-flex nav1 justify-content-center">
						<li className="nav-item ">
							<a href="index.html" className="nav-link text-capitalize nav-button">
								<svg>
									<rect x="0" y="0" fill="none" width="100%" height="100%">
									</rect>
								</svg>							
							trang chủ</a></li>
						<li className="nav-item"><a href="quy-trinh.html" className="nav-link text-capitalize nav-button">
							<svg>
								<rect x="0" y="0" fill="none" width="100%" height="100%">
								</rect>
							</svg>
							quy trình</a></li>
						<li className="nav-item dropdown">
							
							<a href="dich-vu.html" className="nav-link  text-capitalize  dropdown-toggle " >
												dịch vụ</a>
						
							<ul className="dropdown-menu mx-0" >
								<li className="dropdown-item"><a href="dich-vu-rang-implant.html">Trồng Răng Implant</a></li>
								<li className="dropdown-item"><a href="dich-vu-nieng-rang.html">Niềng Răng</a></li>
								<li className="dropdown-item"><a href="dich-vu-Dan-Su-Veneer.html">Dán Sứ Veneer</a></li>
								<li className="dropdown-item"><a href="dich-vu-Boc-Rang-Su.html">Bọc Răng Sứ</a></li>
								<li className="dropdown-item"><a href="dich-vu-nho-rang.html">Nhổ Răng</a></li>
								<li className="dropdown-item"><a href="dich-vu-Han-Tram-Rang.html">Hàn - Trám Răng</a></li>
								<li className="dropdown-item"><a href="dich-vu-Tay-Trang-Rang.html">Tẩy Trắng Răng</a></li>
								<li className="dropdown-item"><a href="dich-vu-dieu-Tri-Tuy.html">Điều Trị Tuỷ</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a href="bang-gia.html" className="nav-link text-capitalize nav-button">
							<svg>
								<rect x="0" y="0" fill="none" width="100%" height="100%">
								</rect>
							</svg>
							bảng giá</a></li>
						<li className="nav-item dropdown">
							<a href="blog-nha-khoa.html" className="nav-link text-capitalize  dropdown-toggle" >
							Blog nha khoa</a>
							<ul className="dropdown-menu ms-0" >
								<li className="dropdown-item"><a href="blog-rang-implant.html">Trồng Răng Implant</a></li>
								<li className="dropdown-item"><a href="blog-nieng-rang.html">Niềng Răng</a></li>
								<li className="dropdown-item"><a href="blog-Mat-Dan-Su.html">Dán Sứ Veneer</a></li>
								<li className="dropdown-item"><a href="blog-Boc-Rang-Su.html">Bọc Răng Sứ</a></li>
								<li className="dropdown-item"><a href="blog-Nho-Rang.html">Nhổ Răng</a></li>
								<li className="dropdown-item"><a href="blog-Han-Tram-Rang.html">Hàn - Trám Răng</a></li>
								<li className="dropdown-item"><a href="blog-Tay-Trang-Rang.html">Tẩy Trắng Răng</a></li>
								<li className="dropdown-item"><a href="blog-Đieu-Tri-Tuy.html">Điều Trị Tuỷ</a></li>
							</ul>
							
						</li>

						<li className="nav-item">
							<a href="lien-he.html" className="nav-link text-capitalize nav-button">
							<svg>
								<rect x="0" y="0" fill="none" width="100%" height="100%">
								</rect>
							</svg>
							liên hệ</a></li>
						<li className="nav-item"><a href="">
							<i className="header-icon fa-brands fa-facebook-f"></i></a></li>
						<li className="nav-item"><a href="">
							<i className="header-icon fa-brands fa-instagram"></i></a></li>
					</ul>
				</div>
			 </div>
		</nav>
	
	</div>
    )    
}
export default navbar