import React, { useState, Children, cloneElement } from 'react';
import SideBar from './sideBar';
import Appels from './components/appels';
import Contacts from './components/contacts';
import Messages from './components/messages';



function ScreenHome() {

  const [selectionMenu, setSelectionMenu] = useState('')
  function onChangeSelection(screen) {
    setSelectionMenu(screen)
  }

  console.log(selectionMenu)

  return (
      
      <div className='everything-screen'>
        <SideBar selection={onChangeSelection}/>
        <div className='side-screen'>
          <CompoundComponentMenu selection={selectionMenu} >
            <Appels />
            <Contacts />
            <Messages />
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
