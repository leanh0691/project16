export const bannerSlider = () =>{
    return(
		<div className="container-fluid carousel slide px-0"  id="banner" data-bs-ride="carousel">
		<div className="carousel-inner" >
			<div className="carousel-item active">
				<img src="images/Banner 1.png" alt="" class="w-100" />
				<div className="carousel-caption">
					<h2>Trồng Răng Giả</h2>
					<h1>Làm Sống Lại Răng Đã Mất</h1>
					<button className="button1"><a href="#">Tìm Hiểu Thêm</a></button>
				</div>
			</div>
			<div className="carousel-item">
				<img src="images/banner2.png" alt="" class="w-100" />
				<div className="carousel-caption">
					<h2>Bạn Thắc Mắc Về</h2>
					<h1>Chi phí điều trị nha khoa</h1>
					<button class="button1"><a href="#">Bảng Giá Dịch Vụ</a></button>
				</div>
			</div>
			<div className="carousel-item">
				<img src="images/banner3.png" alt="" class="w-100" />
				<div className="carousel-caption">
					<h2>Kiến Thức Nha Khoa</h2>
					<h1>Trang bị ngay cho bản thân</h1>
					<button className="button1"><a href="#">Các bài viết Nha Khoa</a></button>
				</div>
			</div>
		</div>
		<button className="carousel-control-prev" data-bs-target="#banner" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span></button>
		<button className="carousel-control-next" data-bs-target="#banner" data-bs-slide="next"><span class="carousel-control-next-icon"></span></button>
	</div>
    )    
}
export default bannerSlider