import React from 'react';


import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import CardHead from './components/card';


function SideBar({selection}) {

  
  const sizeIcon = 'large'
  const listIcons = [{icon: <HomeIcon fontSize={sizeIcon}/>,
                      name: 'Home'},
                      {icon: <CallIcon fontSize={sizeIcon} />,
                      name: 'Appels'},
                      {icon: <PeopleIcon fontSize={sizeIcon}/>,
                      name: 'Contacts'},
                      {icon: <MessageIcon fontSize={sizeIcon}/>,
                      name: 'Messages'},                      
                      {icon: <LocationOnIcon fontSize={sizeIcon}/>,
                      name: 'Geolocalistion'},
                      {icon: <CameraAltIcon fontSize={sizeIcon}/>,
                      name: 'Photos'},
                      {icon: <VideocamIcon fontSize={sizeIcon}/>,
                      name: 'Videos'}]

function menuSelection(screen) {
  selection(screen)
}
  
const displayIcons = listIcons.map((el, i) => {
  return <IconMenu icon={el.icon} key={el.name} name={el.name} isSelected={menuSelection}/>
  
})

  return ( 
    
    <div className="side-bar" >
      <div className="headCard">
        <CardHead />
      </div>
      {displayIcons}
      
    </div>
    
  );
}

function IconMenu({name, icon, isSelected}) {


  function handlePress() {
    isSelected(name)
  }

   

  return (
    <div className='icons' onClick={handlePress}>
        {icon}
      <p>{name}</p>
    </div>
  )
}

export default SideBar;