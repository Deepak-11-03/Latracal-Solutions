import { Paper, TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState } from 'react'
import '../App.css'


function AttendenceForm(props) {
  const { allStudents, setAllStudents } = props

  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const time = new Date().toLocaleTimeString()


  const addStudent = (e) => {
    e.preventDefault();
    const newStudent = { rollNumber, name, checkinTime: time };
    setAllStudents([...allStudents, newStudent]);
    setRollNumber("");
    setName("");
  };


  return (
    <Paper elevation={4} mr="10px" sx={{ width: "20rem", height: "25rem", padding: "1rem", marginLeft: "1rem" }}>
      <Typography variant='h5' textAlign="center" >Attendence Form</Typography>
      <Box padding={2} className="form"  >
        <form onSubmit={addStudent}>
          <TextField
            type="number"
            size='small'
            margin='dense'
            name='rollNumber'
            autoFocus
            required
            fullWidth
            label="Roll number"
            value={rollNumber} onChange={(e) => setRollNumber(e.target.value)}

          />
          <TextField
            size='small'
            margin='dense'
            name='name'
            required
            fullWidth
            label="Student name"
            value={name} onChange={(e) => setName(e.target.value)}

          />
          <Button type="submit" variant="contained" color="primary" sx={{marginLeft:"28%",width:"7rem"}}>
            Add
          </Button>
        </form>
      </Box>
    </Paper>
  )
}

export default AttendenceForm
