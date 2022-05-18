import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import HModal from './components/modal';

import test from './assets/card/test.jpg'


function App() {
  const [open, setOpen] = useState(false);

  const openModal = () =>{
    setOpen(true);
  }

  const imageStyles = {width: '70%', height: '70%'};

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={openModal}>모달팝업</button>
      <div id ='modal-root'>
      { open &&
          <HModal close={() => setOpen(false)}>
            <img src={test} style={imageStyles}/>
          </HModal>
      }
      </div>
    </div>
  );
}

export default App;
