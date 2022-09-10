import React from 'react';


import {Card, Avatar, CardHeader} from '@mui/material';

function CardHead() {


    
    

  return (

    
    <div>
    <Card sx={{ maxWidth: 345 }}>
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
    
    </div>
  );
}

export default CardHead;