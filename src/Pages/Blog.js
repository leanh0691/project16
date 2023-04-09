import React, {useState} from 'react';
import items from './../Components/BlogPagesList';
import { BlogPage } from '../Components/BlogPage';
import BlogCategories from '../Components/BlogCategories';
import BlogPagination from '../Components/BlogPagination';

const allService = ['all', ...new Set(items.map((item) => item.service))];
const allTab = [...new Set(items.map((item) => item.tab))];
const onLoadIteam = items.filter((item) => item.tab === 't1');
const Blog = () => {
const [blogItems, setBlogItems] = useState(onLoadIteam);
const [blogCategories, setBlogCategories] = useState(allService);

const filterItems = (service) => {
    if (service === 'all') {
		setBlogItems(items);
      return;
    }
    const newItems = items.filter((item) => item.service === service);
    setBlogItems(newItems);
  	};

const [blogTab, setBlogTab] = useState(allTab);
const filterTabs = (tab) => {
	const newItems = items.filter((item) => item.tab === tab);
	setBlogItems(newItems);
	};
	return(
	<div>
		<div className="container-fluid px-0">
			<div className="Banner2">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-8 cal-sm-12 BG2">
							<p><span><i className="fa-solid fa-tag"></i></span>All blog</p>
							<h1>Chuyên Mục: Blog Nha Khoa » Dental</h1>
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
							<div className="tab-content pt-3">
								<div className="tab-pane active" id="t1">
									<div className="container px-0">									
										<BlogPage items={blogItems} />
									</div>
								</div>
							</div>
							
							<BlogPagination blogTab={blogTab} filterTabs={filterTabs} />
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-12">
						<div className="BlogMenu">
							<input type="text" placeholder="Tim kiem ..." />
							<h3>Bài viết mới nhất</h3>
							<div className="line"></div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 col-12 pe-0">
									<img src="images/phong-x-quang-dana-dental-1280x640.jpg" alt="" className="w-100" />
								</div>
								<div className="col-8 col-md-8 col-sm-12 col-12">
									<p>CT Cone Beam 3D – Tiêu chuẩn của một Nha khoa Kỹ thuật cao</p>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-12 pe-0 pt-3">
									<img src="images/trong-rang-implant.jpg" alt="" className="w-100" />
								</div>
								<div className="col-8 col-md-8 col-sm-12 col-12 pt-3">
									<p>Sau khi nhổ răng bao lâu thì trồng Implant được?</p>
								</div>
							</div>
							<h3>Categories</h3>
							<div className="line"></div>
								<BlogCategories blogCategories={blogCategories} filterItems={filterItems} />
							
						</div> 
					</div>	
				</div>
			</div>
		</div>
	</div>);
	};

export default Blog;