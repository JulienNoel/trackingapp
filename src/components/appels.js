import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, date, duree) {
  return { name, date, duree };
}

const rows = [
  createData('jacques', '01/01/2022', 1),
  createData('Julie', '02/02/2022', 2),
  createData('Claire', '03/04/2022', 3),
  createData('Jean', '04/05/2022', 5),
  createData('Carole', '05/06/2022', 4),
];


function Appels() {    
    

  return (    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contacts</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Durée</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.duree}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}

export default Appels;