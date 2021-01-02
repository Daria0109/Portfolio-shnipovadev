import React, {useState, useEffect} from 'react';
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import Contacts from "./Contacts/Contacts";
import Nav from "./Nav/Nav";

function App() {



  return <div className="App">

    <Main/>
    <Skills/>
    <Projects/>
    <Contacts/>
    {/*<Footer/>*/}
  </div>
}

export default App;
