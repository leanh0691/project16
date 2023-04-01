import React from 'react';
import  './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Header from './Components/Header'
import  Navbar from './Components/Navbar'
import  Footer from './Components/Footer'
import DichVu from './Pages/DichVu'
import DichVuBocRangSu from './Pages/DichVuBocRangSu'
import DichVuDanSUVeneer from './Pages/DichVuDanSUVeneer'
import DichVuDieuTriTuy from './Pages/DichVuDieuTriTuy'
import DichVuHanTramRang from './Pages/DichVuHanTramRang'
import DichVuNhoRang from './Pages/DichVuNhoRang'
import DichVuNiengRang from './Pages/DichVuNiengRang'
import DichVuRangImplant from './Pages/DichVuRangImplant'
import DichVuTayTrangRang from './Pages/DichVuTayTrangRang'

import BangGia from './Pages/BangGia'
import Blog from './Pages/Blog'
import LienHe from './Pages/LienHe'
import Home from './Pages/Home'
import BlogBocRangSu from './Pages/BlogBocRangSu'
import BlogBocRangSuBlog1 from './Pages/BlogBocRangSuBlog1'
import BlogDieuTriTuy from './Pages/BlogDieuTriTuy'
import BlogHanTramRang from './Pages/BlogHanTramRang'
import BlogHanTramRangBlog1 from './Pages/BlogHanTramRangBlog1'
import BlogDanMatSu from './Pages/BlogDanMatSu'
import BlogDanMatSuBlog1 from './Pages/BlogDanMatSuBlog1'
import BlogNhoRang from './Pages/BlogNhoRang'
import BlogNhoRangBlog1 from './Pages/BlogNhoRangBlog1'

import BlogNiengRangBlog1 from './Pages/BlogNiengRangBlog1'
import BlogNiengRang from './Pages/BlogNiengRang'

import BlogRangImplant from './Pages/BlogRangImplant'
import BlogRangImplantBlog1 from './Pages/BlogRangImplantBlog1'
import BlogRangImplantBlog2 from './Pages/BlogRangImplantBlog2'

import BlogTayTrangRang from './Pages/BlogTayTrangRang'
import BlogTayTrangRangBlog1 from './Pages/BlogTayTrangRangBlog1'
function App() {
    return (
        <Router>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/Home' element={<Home />}/>
                <Route path='/' element={<Home />}/>
                <Route path='/DichVu' element={<DichVu />}/>
                <Route path='/DichVuBocRangSu' element={<DichVuBocRangSu />}/>
                <Route path='/DichVuDanSUVeneer' element={<DichVuDanSUVeneer />}/>
                <Route path='/DichVuDieuTriTuy' element={<DichVuDieuTriTuy />}/>
                <Route path='/DichVuHanTramRang' element={<DichVuHanTramRang />}/>
                <Route path='/DichVuNhoRang' element={<DichVuNhoRang />}/>
                <Route path='/DichVuNiengRang' element={<DichVuNiengRang />}/>
                <Route path='/DichVuRangImplant' element={<DichVuRangImplant />}/>
                <Route path='/DichVuTayTrangRang' element={<DichVuTayTrangRang />}/>

                <Route path='/BangGia' element={<BangGia />}/>
                <Route path='/Blog' element={<Blog />}/>
                <Route path='/LienHe' element={<LienHe />}/>
                <Route path='/BlogBocRangSu' element={<BlogBocRangSu />}/>
                <Route path='/BlogBocRangSuBlog1' element={<BlogBocRangSuBlog1 />}/>
                <Route path='/BlogDieuTriTuy' element={<BlogDieuTriTuy />}/>
                <Route path='/BlogHanTramRang' element={<BlogHanTramRang />}/>
                <Route path='/BlogHanTramRangBlog1' element={<BlogHanTramRangBlog1 />}/>
                <Route path='/BlogDanMatSu' element={<BlogDanMatSu />}/>
                <Route path='/BlogDanMatSuBlog1' element={<BlogDanMatSuBlog1 />}/>
                <Route path='/BlogNhoRang' element={<BlogNhoRang />}/>
                <Route path='/BlogNhoRangBlog1' element={<BlogNhoRangBlog1 />}/>

                <Route path='/BlogNiengRang' element={<BlogNiengRang />}/>
                <Route path='/BlogNiengRangBlog1' element={<BlogNiengRangBlog1 />}/>

                <Route path='/BlogRangImplant' element={<BlogRangImplant />}/>
                <Route path='/BlogRangImplantBlog1' element={<BlogRangImplantBlog1 />}/>
                <Route path='/BlogRangImplantBlog2' element={<BlogRangImplantBlog2 />}/>

                <Route path='/BlogTayTrangRang' element={<BlogTayTrangRang />}/>
                <Route path='/BlogTayTrangRangBlog1' element={<BlogTayTrangRangBlog1 />}/>
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App;