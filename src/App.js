import React , { Component } from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Index from './Components/Index/Index.js';

class App extends Component {
  render(){
    return(
     <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route exact path="/Contact" element={<Contact/>}/>  
          </Routes>
        </BrowserRouter>
     </div>
    )
  }
}

export default App;