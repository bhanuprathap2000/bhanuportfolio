import React from 'react';
import Mainbar from "./components/Mainbar"
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import { Redirect, Route, Switch} from "react-router-dom"
import About from "./components/About";
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import { useEffect } from "react";
import { AnimatePresence } from 'framer-motion'

function App() {
  
  return (
  
    <div className="App">
      <div className="container app__container">
        <div className="row app__row">
                <div className="col-lg-3 ">

               

                   <Sidebar/>
                 
                  </div>

                  <div className="col-lg-9 app__main-content">
                 <Mainbar/>

                 <Navbar/>
                 <AnimatePresence exitBeforeEnter>
                 <Switch >
                 <Route exact path="/">
                   <About/>
                 </Route>
                 <Route exact path="/resume">
                   <Resume/>
                 </Route>
                 <Route exact path="/projects" component={Projects} />
                 <Route>
                   <Redirect to="/"></Redirect>
                 </Route>
                 </Switch>
                 </AnimatePresence>
                  </div>
        </div>
      </div>
     

    </div>
  
  );
}

export default App;
