export const WorkHours = () =>{
    
    return(
        <div className="container-fluid px-0">
		<div className="sectionLichLV">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 order-lg-1 order-lg-1 order-md-1 order-1">
						<h2>Giờ làm việc</h2>
					</div>
					<div className="col-lg-6 col-md-12 order-lg-1 order-lg-2 order-md-3 order-3">
						<h1>Đặt lịch khám</h1>
					</div>
					<div className="col-lg-6 col-md-12 pb-3 mb-2 order-lg-3 order-md-2 order-2">
						<ul className="ps-1 pt-3">
							<li className="row pe-3">
								<div className="col-6"><h3 className="text-start">Thứ Hai</h3></div>
								<div className="col-6"><h3 className="text-end pe-5">8.AM - 8.PM</h3></div>
								<div className="col-12 line2"></div>
							</li>
							<li className="row pe-3">
								<div className="col-6"><h3 className="text-start">Thứ Ba</h3></div>
								<div className="col-6"><h3 className="text-end pe-5">8.AM - 8.PM</h3></div>
								<div className="col-12 line2"></div>
							</li>
							<li className="row pe-3">
								<div className="col-6"><h3 className="text-start">Thứ Tư</h3></div>
								<div className="col-6"><h3 className="text-end pe-5">8.AM - 8.PM</h3></div>
								<div className="col-12 line2"></div>
							</li>
							<li className="row pe-3">
								<div className="col-6"><h3 className="text-start">Thứ Năm</h3></div>
								<div className="col-6"><h3 className="text-end pe-5">8.AM - 8.PM</h3></div>
								<div className="col-12 line2"></div>
							</li>
							<li className="row pe-3">
								<div className="col-6"><h3 className="text-start">Thứ Sáu</h3></div>
								<div className="col-6"><h3 className="text-end pe-5">8.AM - 8.PM</h3></div>
								<div className="col-12 line2"></div>
							</li>
							<li className="row pe-3">
								<div className="col-6"><h3 className="text-start">Thứ Bảy</h3></div>
								<div className="col-6"><h3 className="text-end pe-5">8.AM - 8.PM</h3></div>
								<div class="col-12 line2"></div>
							</li>
							<li className="row pe-3">
								<div className="col-6"><h3 className="text-start">Chủ Nhật</h3></div>
								<div className="col-6"><h3 className="text-end pe-5 ">8.AM - 8.PM</h3></div>
								<div className="col-12 line2"></div>
							</li>
						</ul>
					</div>		
					<div className="col-lg-6 col-md-12 pt-4 order-lg-4 order-md-4 order-4">
						<div className="row col-md-12">
							<div className="col-md-2">
								<label className="col-form-label">Tên</label>
							</div>
							<div className="col-md-10">
								<input type="text" placeholder="Tên" className="form-control mb-4 w-100" />
							</div>	
						</div>
						<div className="row col-md-12">
							<div className="col-md-2">
								<label className="col-form-label">Điện Thoại</label>
							</div>
							<div className="col-md-10">
								<input type="number" placeholder="Điện Thoại" cclassNamelass="form-control mb-4 w-100" />
							</div>	
						</div>
						<div className="row col-md-12">
							<div className="col-md-2">
								<label className="col-form-label">Dịch Vụ</label>
							</div>
							<div className="col-md-10">
								<input type="text" placeholder="Dịch Vụ" className="form-control mb-4 w-100" />
							</div>	
						</div>
						<div className="row col-md-12">
							<div className="col-md-2">
								<label className="col-form-label">Bác Sỹ</label>
							</div>
							<div className="col-md-10">
								<input type="text" placeholder="Bác Sỹ" class="form-control mb-4 w-100" />
							</div>	
						</div>	
						<div className="row col-md-12">
							<div className="col-md-2">
								<label className="col-form-label">Thời Gian</label>
							</div>
							<div className="col-md-10">
								<input type="text" placeholder="Thời Gian" className="form-control mb-4 w-100" />
							</div>	
						</div>
						<div className="row">
							<div className="col-md-2">
								<label className="col-form-label">Message</label>
							</div>
							<div className="col-md-10">
								<textarea rows="4" cols="60" className="w-100"></textarea>
							</div>
						</div>
						<div className="col-6 offset-lg-2 offset-md-2 offset-sm-0">
							<button className="button1 w-100"><a href="">Đặt Lịch</a></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )    
}
export default WorkHours