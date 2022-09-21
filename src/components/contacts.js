import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

import { useEffect, useState } from 'react';




function Contacts({selection}) { 

const [usersList, setUsersList] = useState([])
  

useEffect(() => {

  async function loadUser () {

    const response = await fetch('https://dummyjson.com/users')
    const rawResponse = await response.json()
    
    if (response) {
      setUsersList(rawResponse.users) 
    }
       
    
  }
  loadUser()
}, [])

const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
   

  return selection !== 'Contacts' ||(    
    
    
    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
      {usersList.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.lastName}`;
        return (
          <ListItem
            key={user.phone}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(user.lastName)}
                checked={checked.indexOf(user.lastName) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar                  
                  src={user.image}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${user.firstName} ${user.lastName}`}
                                          secondary={`${user.phone}`} />              
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    
  );
}

export default Contacts;