import React, { useState, Children, cloneElement } from 'react';
import SideBar from './sideBar';
import Appels from './components/appels';
import Contacts from './components/contacts';
import Messages from './components/messages';
import Photos from './components/photos';
import GeoLocalisation from './components/localisation';
import Videos from './components/video';
import PhoneInfo from './components/phoneInfo';

function ScreenHome() {

  const [selectionMenu, setSelectionMenu] = useState('Home')
 
  function onChangeSelection(screen) {
    setSelectionMenu(screen)
    
  }

 

  return (
      
      <div className='everything-screen'>
      
        <SideBar selection={onChangeSelection}/>
        <PhoneInfo />
        <div className='side-screen'>
          <CompoundComponentMenu selection={selectionMenu} >
            <Appels />
            <Contacts />
            <Messages />            
            <GeoLocalisation />
            <Photos />
            <Videos />
          </CompoundComponentMenu>
        </div>
        
      </div>
      
  
  );
}

 function CompoundComponentMenu({children, selection}) {

  

   return Children.map(children, child =>
          cloneElement(child, {selection}))

 }

export default ScreenHome;
