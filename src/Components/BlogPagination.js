import React from "react";
export const BlogPagination = ({blogTab, filterTabs}) =>{

    return(
        <ul class="nav pagination text-center">
            {blogTab.map((blogTab, id) => {
                return(
            <li className="page-item">   
                <a href="#" className="page-link" data-bs-toggle="tab" data-bs-target="#t1" key={id} onClick={() => filterTabs(blogTab)}><button>{blogTab}</button></a>
            </li>
            )})}
        </ul>
    );  
 }
export default BlogPagination