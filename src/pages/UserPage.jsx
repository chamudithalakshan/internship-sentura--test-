import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function UserPage() {
    const [name, setName] = useState('')
    const [uid, setUid] = useState('')
    const [email, setEmail] = useState('')
    const [token,setToken] = useState('wys_84a7qaHZ0F8pJ1iEsjhWZyJ72DykCO11BgxO')
    const addUser = () => {
        // Make a POST request to your server
        fetch('https://73ffef27f91c463695b25d6ac6444e68.weavy.io/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            uid: uid,
            name: name,
            email: email,
          }),
        })
          .then(response => response.json())
          .then(newUser => {
            console.log(newUser)
            // Update the local state with the new user
            // setUsers([...users, newUser]);
          })
          .catch(error => {
            console.error('Error adding user:', error);
          });
      };
    
  return (
    <div>
        <h1>user</h1>
        <TextField onChange={(e)=>setUid(e.target.value)} value={uid} id="outlined-basic" label="Uid" variant="outlined" required/>
        <TextField onChange={(e)=>setName(e.target.value)} value={name} id="filled-basic" label="Name" variant="outlined" required/>
        <TextField onChange={(e)=>setEmail(e.target.value)} value={email} id="standard-basic" label="Email" variant="outlined" type='email' required/>
<Button onClick={addUser} variant="contained">Add User</Button>
<Button variant="contained">delete</Button>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}
