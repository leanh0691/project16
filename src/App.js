import React from 'react';
import ReactDOM from 'react-dom/client';
import  './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  Header from './Components/Header'
import  Navbar from './Components/Navbar'
import  Footer from './Components/Footer'
import DichVu from './Pages/DichVu'
import BangGia from './Pages/BangGia'
import Blog from './Pages/Blog'
import LienHe from './Pages/LienHe'
import Home from './Pages/Home'
function App() {
    return (
        <Router>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/Home' element={<Home />}/>
                <Route path='/' element={<Home />}/>
                <Route path='/DichVu' element={<DichVu />}/>
                <Route path='/BangGia' element={<BangGia />}/>
                <Route path='/Blog' element={<Blog />}/>
                <Route path='/LienHe' element={<LienHe />}/>
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App;