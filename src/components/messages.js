import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, numero, texte) {
  return { name, numero, texte };
}

const rows = [
  createData('jacques', '0677889966', 'salut, ça va?'),
  createData('Julie', '0145909078', 'Ce soir ciné ?'),
  createData('Claire', '0245897866', 't\'es où?'),
  createData('Jean', '0356845522', 'que paso amigo'),
  createData('Carole', '0762354788', 'let \'go Thailand'),
];


function Messages() {    
    

  return (    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contacts</TableCell>
            <TableCell align="right">Numéro</TableCell>
            <TableCell align="right">Message</TableCell>           
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
              <TableCell align="right">{row.numero}</TableCell>
              <TableCell align="right">{row.texte}</TableCell>               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}

export default Messages;