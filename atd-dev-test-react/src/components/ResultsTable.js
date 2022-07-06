import React from 'react';
import {useEffect, useContext} from 'react'
import {DataContext} from '../App'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import StyledTableRow from '../CustomStyles/StyledTableRow'
import useFetch from "../hooks/useFetch";

function ResultsTable() {

    const data = useContext(DataContext)


    useEffect(() => {
        console.log(data)
    },[data])

    return (

         <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Destination</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(i => (
                        <StyledTableRow>
                            <TableCell><img style={{width:'160px', height:'120px'}} src={i.image} alt="Destination image" /></TableCell>
                            <TableCell>{i.title}</TableCell>
                            <TableCell>{i.destination}</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>


    );
}

export default ResultsTable;