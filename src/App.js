import './App.css';
import  Header from './Components/Header'
import  Navbar from './Components/Navbar'
import  Footer from './Components/Footer'

const DichVu = ReactDOM.createRoot(document.getElementById('DichVu'));
DichVu.render(
  <React.StrictMode>
      <Header/>         
      <Navbar/>     
      
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();