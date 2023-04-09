import React from "react";

export const BlogPage = ({items}) =>{
	
    return(

    <div className="row">	
        <div className="col-lg-12 col-md-12 col-12">
        <ul>
            {items.map((blogItem) => {
            const { id, title, img, discrip, service,link } = blogItem;
            return (
                <li className="row" key={id}>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-12 text-center BlogNhaKhoaIconBlog">
                    <img src="images/logo.png" alt="" className="w-100" />
                    <p>By Nha Khoa Dental</p>
                    <p>27/11/2022</p>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                    <img src={img} alt="" className="w-100 mb-3" />
                    <p><span><i className="fa-solid fa-tag"></i></span> {service} <br/> <span><i className="fa-regular fa-comment"></i></span> Comment</p>
                    <h2>{title}</h2>
                    <p>{discrip}</p>
                    <button className="button1"><a href={link}>Tiếp Tục Tìm Hiểu</a></button>
                </div>	
                <div className="line"></div>
                </li>
            )})}
    </ul>
        </div>
    </div>

    )    
}
export default BlogPage