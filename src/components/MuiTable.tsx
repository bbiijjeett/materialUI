import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{height:'300px'}}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>first_name</TableCell>
            <TableCell>last_name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>gender</TableCell>
            <TableCell align='center'>ip_address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map(row => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th':{border: 0} }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell align='center'>{row.ip_address}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;


const tableData = [{
  "id": 1,
  "first_name": "Brit",
  "last_name": "Driver",
  "email": "bdriver0@delicious.com",
  "gender": "Male",
  "ip_address": "199.212.75.61"
}, {
  "id": 2,
  "first_name": "Dale",
  "last_name": "Beckinsale",
  "email": "dbeckinsale1@twitter.com",
  "gender": "Male",
  "ip_address": "199.58.26.49"
}, {
  "id": 3,
  "first_name": "Glenna",
  "last_name": "Bushnell",
  "email": "gbushnell2@artisteer.com",
  "gender": "Polygender",
  "ip_address": "27.196.47.59"
}, {
  "id": 4,
  "first_name": "Siegfried",
  "last_name": "Bartoszek",
  "email": "sbartoszek3@unc.edu",
  "gender": "Male",
  "ip_address": "188.106.47.34"
}, {
  "id": 5,
  "first_name": "Jarrad",
  "last_name": "Meharry",
  "email": "jmeharry4@cpanel.net",
  "gender": "Male",
  "ip_address": "171.38.36.85"
}, {
  "id": 6,
  "first_name": "Caldwell",
  "last_name": "Janes",
  "email": "cjanes5@merriam-webster.com",
  "gender": "Male",
  "ip_address": "243.245.253.228"
}, {
  "id": 7,
  "first_name": "Larina",
  "last_name": "Izen",
  "email": "lizen6@sitemeter.com",
  "gender": "Female",
  "ip_address": "119.152.68.55"
}, {
  "id": 8,
  "first_name": "Ailbert",
  "last_name": "Gopsill",
  "email": "agopsill7@w3.org",
  "gender": "Male",
  "ip_address": "81.36.141.121"
}, {
  "id": 9,
  "first_name": "Kimmi",
  "last_name": "Lies",
  "email": "klies8@woothemes.com",
  "gender": "Female",
  "ip_address": "64.24.88.78"
}, {
  "id": 10,
  "first_name": "Barbe",
  "last_name": "Broke",
  "email": "bbroke9@imageshack.us",
  "gender": "Female",
  "ip_address": "235.86.93.100"
}];