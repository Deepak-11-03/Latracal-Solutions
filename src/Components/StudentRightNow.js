import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

function StudentRightNow(props) {
    const { allStudents } = props
    const [studentNow, setStudentNow] = useState([])

    const getNumStudentsInSchool = () => {
        const totalPresentRightNow = allStudents.filter((student) => !student.checkoutTime)
        setStudentNow(totalPresentRightNow)
    }

    useEffect(() => {
        getNumStudentsInSchool()
    }, [allStudents])


    return (
        <Paper elevation={3} sx={{padding: "1rem" }}>
            <Typography variant="h4" color="initial" textAlign="center">Students right now in school</Typography>
            <TableContainer sx={{ marginTop: "10px",height: "30rem" }}>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentNow.length > 0 ? studentNow.map((student, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{student.rollNumber}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.checkinTime}</TableCell>
                                </TableRow>
                            )
                        }) :
                            
                         <TableCell colSpan={3}  ><Typography variant='h4' textAlign="center" padding="30px" >No data</Typography></TableCell>
                            
                        }
                    </TableBody>

                </Table>

            </TableContainer>

        </Paper>
    )
}

export default StudentRightNow
