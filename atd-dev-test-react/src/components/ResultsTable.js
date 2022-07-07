import React from 'react';
import {useEffect, useContext, useState} from 'react'
import {DataContext} from './Home'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import StyledTableRow from '../CustomStyles/StyledTableRow'

function ResultsTable({data}) {

    const [showTable, setShowTable] = useState(false);
    const [noSearchResult, setNoSearchResult] = useState("")
    useEffect(() => {

        if(data !== []){
            setShowTable(data !== undefined ? true : setNoSearchResult("There are no results for your title. Please try another title"))
            console.log(data)
        }
    },[data])

    return (
        <>
            {showTable &&
                <Box sx={{width:'100%'}}>
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
                                <StyledTableRow key={i.id}>
                                    <TableCell><img style={{width: '160px', height: '120px'}} src={i.image}
                                                    alt="Destination image"/></TableCell>
                                    <TableCell>{i.title}</TableCell>
                                    <TableCell>{i.destination}</TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            }
            {noSearchResult}
        </>
    );
}

export default ResultsTable;