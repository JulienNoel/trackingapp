import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function createData(name, numero, texte) {
  return { name, numero, texte };
}

const rows = [
  createData('Jacques', '0677889966', 'salut, ça va?'),
  createData('Julie', '0145909078', 'Ce soir ciné ?'),
  createData('Claire', '0245897866', 't\'es où?'),
  createData('Jean', '0356845522', 'que paso amigo'),
  createData('Carole', '0762354788', 'let \'go Thailand'),
];



function Messages({selection}) {    
    

  return selection !== 'Messages' ||(    
    
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {rows.map((user) => {
        
        return (
          <ListItem key={user.name}>
            <ListItemButton onClick={() => console.log('selectContact')}>
              <ListItemAvatar>
                <Avatar alt={user.name} sx={{ bgcolor: 'orange' }}>
                {user.name.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText id={user.name} primary={`${user.texte}`} secondary={`date du dernier message`}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    
  );
}

export default Messages;