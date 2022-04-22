import React , {useState} from "react";

import "./style.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import User from './components/User';
import Navbar from './components/Navbar';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
export default function App() {


let [Data,setData] = useState({
  name : "mostafa",
  age : 38,
})

let handler = (e) => {
 const myData = {
   ...Data,
   [e.target.id] : e.target.value
 }
setData(myData)
}

  return (
    // <BrowserRouter>
    <div>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/user" element={<User/>}/>

        </Routes> */}
      
      <h1>Heelo StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Products />
      <Footer handler={handler} Data={Data}/>
      {Data.name}   {Data.age}
      <Header />
    </div>
    //  </BrowserRouter>
  );
}
