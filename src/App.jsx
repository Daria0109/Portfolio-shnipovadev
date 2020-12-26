import React, {useState} from 'react';
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import Contacts from "./Contacts/Contacts";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="App">
      <ToggleMenu menu={menu} setMenu={setMenu}/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
