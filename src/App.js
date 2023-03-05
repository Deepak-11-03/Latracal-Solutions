import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css'
import AttendenceForm from './Components/AttendenceForm';
import StudentRightNow from './Components/StudentRightNow';
import StudentsList from './Components/StudentsList';

function App() {
  const [allStudents, setAllStudents] = useState([])
  



  return (
    <div className='app' >
      <AppBar sx={{ backgroundColor: "#505050" }}>
        <Typography variant="h1" padding={1} sx={{ fontSize: "3vmax", textAlign: "center" }}>Student Attendence App</Typography>
      </AppBar>
      <Grid container spacing={1} className="main">
        <Grid item lg={3.5} md={5} sm={12}  >
          <AttendenceForm {...{ allStudents, setAllStudents }} />
        </Grid>
        <Grid item lg={4.2} md={7} sm={12}>
          <StudentsList {...{ allStudents, setAllStudents }} />
          </Grid>
        <Grid item lg={4.2} md={12} sm={12}>
          <StudentRightNow {...{ allStudents }} />
          </Grid>
      </Grid>

    </div>
  );
}

export default App;
