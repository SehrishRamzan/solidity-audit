import React from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CompanyLogo from './components/CompanyLogo';
import Advantages from './components/Advantages';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Route to='/'exact component={Home} />
        <CompanyLogo/>
        <Route to='/advantages' exact component={Advantages} />
        <Route to='/about' exact component={About} />
        <Route to='/services' exact component={Services} />
        <Route to='/whyus' exact component={WhyUs} />
        {/* <Route to='/process' component={Process} /> */}
        <Route to='/contact' exact component={Contact} />
        <Footer/>


      </BrowserRouter>
    </div>
  );
}

export default App;
