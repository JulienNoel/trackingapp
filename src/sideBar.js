import React from 'react';
import './App.css';
import CallIcon from '@mui/icons-material/Call';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';


function SideBar() {


    
    

  return (

    <div className="side-bar" >
      <div className='icons'>
        <CallIcon fontSize='large' />
        <p>Appels</p>
      </div>
      <div className='icons'>
        <PeopleIcon fontSize='large'/>
        <p>Contacts</p>
      </div>
      <div className='icons'>
        <MessageIcon fontSize='large'/>
        <p>Messages</p>
      </div>
      <div className='icons'>
        <ScreenshotMonitorIcon fontSize='large'/>
        <p>Screenshots</p>
      </div>
      <div className='icons'>
        <LocationOnIcon fontSize='large'/>
        <p>Localisation</p>
      </div>
      <div className='icons'>
        <CameraAltIcon fontSize='large'/>
        <p>Photos</p>
      </div>
      <div className='icons'>
        <VideocamIcon fontSize='large'/>
        <p>Videos</p>
      </div>
      
      
      
      
      
      
    
            
    </div>
  );
}

export default SideBar;