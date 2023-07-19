import React from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js'
import Login from './Login.js'
import { BrowserRouter , Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<> <Header /> <Home /> </>} /> 
          
          <Route path='/checkout' element={<> <Header /> <Checkout /> </>} />

          <Route path="/login" element ={<> <Login/> </>}/>
            
            
         
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
