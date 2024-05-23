import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Listing from './pages/Home/Listing';
import Footer from './components/footer/footer';
import  NotFound from './pages/NotFound';
import DetailsPage from './pages/Details/index';
// import { useEffect, useState } from 'react';
// import axios from 'axios';


function App() {

  // const [productData, setProductData] = useState([]);

  // useEffect(()=>{
  //   getData('http://localhost:4000/productData');
  // },[]);

  // const getData=async(url)=>{
  //   try{

  //     await axios.get(url).then((response)=>{
  //       console.log(response.data);
  //     })

  //   }catch(error){
  //     console.log(error.message);
  //   }
  // }

  return (
    // productData.length!==0 &&
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>} />
        <Route exact={true} path='/listing' element={<Listing/>} />
        <Route exact={true} path='/details' element={< DetailsPage/>} />
        <Route exact={true} path='*' element={< NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
