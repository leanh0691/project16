import React from "react";

export const BlogPage = () =>{
	function CheckBlog(){
		setContact(() => {
			return {	
		}
		}	
		)
	}
    return(
		<li className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 col-12 text-center BlogNhaKhoaIconBlog">
                <img src="images/logo.png" alt="" className="w-100" />
                <p>By Nha Khoa Dental</p>
                <p>27/11/2022</p>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <img src="images/phong-x-quang-dana-dental-1280x640.jpg" alt="" className="w-100 mb-3" />
                <p><span><i className="fa-solid fa-tag"></i></span> Trồng Răng Implant <br/> <span><i className="fa-regular fa-comment"></i></span> Comment</p>
                <h2>CT Cone Beam 3D – Tiêu chuẩn của một Nha khoa Kỹ thuật cao</h2>
                <p>Y học nói chung và nha khoa nói riêng đã có những bước phát triển vượt bậc nhờ sự hỗ trợ của khoa học công nghệ, ứng dụng máy móc hiện đại trong chẩn đoán và điều trị. Hiện nay, máy chụp CT Cone Beam tạo ra hình ảnh 3D về cấu trúc răng, mô...</p>
                <button className="button1"><a href="blog-rang-implant-blog1.html">Tiếp Tục Tìm Hiểu</a></button>
                
            </div>	
            <div className="line"></div>
        </li>

    )    
}
export default DoctorCard