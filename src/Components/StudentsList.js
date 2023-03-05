import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@mui/material';
import React from 'react'
import '../App.css'

function StudentsList(props) {
    const { allStudents, setAllStudents } = props

    const updateCheckoutTime = (rollNumber) => {
        const updatedStudents = allStudents.map((student) => {
            if (student.rollNumber === rollNumber) {
                return { ...student, checkoutTime: new Date().toLocaleTimeString() };
            }
            return student;
        });
        setAllStudents(updatedStudents);
    };



    return (
        <Paper elevation={3} sx={{padding: "1rem" }}>
            <Typography variant="h4" color="initial" textAlign="center">Student Attendence</Typography>
            <TableContainer sx={{height: "30rem", marginTop: "1rem" }} >

                <Table aria-label="Student table" size="small" stickyHeader >
                    <TableHead >
                        <TableRow  >
                            <TableCell>
                                Roll no.
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Check-in
                            </TableCell>
                            <TableCell>
                                Check-out
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allStudents.map((student, index) => {
                            return (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{student.rollNumber}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.checkinTime}</TableCell>
                                    {student.checkoutTime ?
                                        <TableCell>{student.checkoutTime}</TableCell>
                                        :
                                        <TableCell><Button onClick={() => updateCheckoutTime(student.rollNumber)} variant="contained" color="primary">
                                            Checkout
                                        </Button></TableCell>
                                    }
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>

            </TableContainer>
        </Paper>
    )
}

export default StudentsList
