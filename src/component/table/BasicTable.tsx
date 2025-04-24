import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({rowprops, columnProps}) {
  return (
    <TableContainer sx={{borderRadius:16, backgroundColor:'#267B83',justifyContent:'center'}} component={Paper}>
      <Table sx={{ minWidth: 650 , backgroundColor:'#267B83'}} aria-label="simple table">
        <TableHead>
          <TableRow>
          {columnProps.map((column) => (            

            <TableCell sx={{color:'#F2F2F2', fontSize:16, paddingY:'24px'}} align="center">{column}</TableCell>
            // <TableCell sx={{color:'#F2F2F2', fontSize:16,paddingY:'24px'}} align="center">Network</TableCell>
            // <TableCell sx={{color:'#F2F2F2', fontSize:16, paddingY:'24px'}} align="center">APY&nbsp;(g)</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowprops.map((row,index) => (
            <TableRow
              key={index}
             
            >
              <TableCell sx={{borderBottom:0, color:'#F2F2F2', fontSize:16, paddingY:'24px'}} align="center" component="th" scope="row">
                {row.stakingPlan}
              </TableCell>
              <TableCell sx={{borderBottom:0, color:'#F2F2F2', fontSize:16, paddingY:'24px'}} align="center">{row.network}</TableCell>
              <TableCell sx={{borderBottom:0, color:'#F2F2F2', fontSize:16, paddingY:'24px'}} align="center">{row.apy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
