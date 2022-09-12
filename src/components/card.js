import React from 'react';


import {Card, Avatar, CardHeader} from '@mui/material';

function CardHead() {


    
    

  return (    
    
    <Card sx={{
      bgcolor: 'background.paper',
      boxShadow: 8,
      borderRadius: 2,
      
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#FFD25A' }} aria-label="recipe">
            JN
          </Avatar>
        }        
        title="Julien Noel"
        subheader="10/09/2022"
      />      
    </Card>
    
    
  );
}

export default CardHead;