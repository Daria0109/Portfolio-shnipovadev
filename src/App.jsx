import React, {useEffect} from 'react';
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'




function App() {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      delay: 100,
      once: false,
    });
    AOS.refresh()
  }, [])

  return <div>
    <Main/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Footer/>
  </div>
}

export default App;
