import React from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CompanyLogo from './components/CompanyLogo';
import Advantages from './components/Advantages';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Route to='/'exact component={Home} />
        {/* <CompanyLogo/> */}
        <Route to='/advantages' component={Advantages} />
        <Route to='/about' component={About} />
        <Route to='/services' component={Services} />


      </BrowserRouter>
    </div>
  );
}

export default App;
