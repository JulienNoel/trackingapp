import React, {useState, createContext} from 'react';
import SideBar from './sideBar';
import Appels from './components/appels';
import Contacts from './components/contacts';
import Messages from './components/messages';

const MenuSelection = createContext();

function ScreenHome() {

  const [selectSideScreen, setSelectSideScreen] = useState('')
  

  return (
    <MenuSelection.Provider value={/* une valeur */}>   
      <div className='everything-screen'>
      <SideBar />
      <div className='side-screen'>
        <Appels />
        <Contacts />
        <Messages/>
      </div>
      </div>
    </MenuSelection.Provider>   
  
  );
}

export default ScreenHome;
