import React from 'react';

const BlogCategories = ({ blogCategories, filterItems }) => {
  return (
    <div className="btn-container">
      <button className="w-100 dropdown pb-0" >
        <a href="" className="nav-link dropdown-toggle text-capitalize" data-bs-toggle="dropdown">Select Category</a>
        <ul className="dropdown-menu mt-1" >
          {blogCategories.map((blogCategories, id) => {
              return (
                <li className="dropdown-item" key={id} onClick={() => filterItems(blogCategories)}>{blogCategories} </li>	
                );})}
        </ul>
			</button>
    </div>
  );
};
export default BlogCategories;