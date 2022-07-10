import React from 'react';
import {useEffect, useState} from 'react'
import {Box, Table, TableBody, TableRow, TableCell, TableHead,Typography } from '@mui/material'
import StyledTableRow from '../CustomStyles/StyledTableRow'


function ResultsTable({data}) {

    const [showTable, setShowTable] = useState(false);
    const [noSearchResult, setNoSearchResult] = useState("")

    //If there are no search results, display try again message
    useEffect(() => {
        if(data !== []){
            setShowTable(data !== undefined ? true : setNoSearchResult("There are no results for your search entry. Please try again"))
        }
    },[data])

    return (
        <>
            {showTable &&
                <Box sx={{width:'100%'}}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{backgroundColor:'#D3D3D3'}}>
                                <TableCell><Typography variant="GeneralText" sx={{fontWeight:'bold'}}>Image</Typography></TableCell>
                                <TableCell><Typography variant="GeneralText" sx={{fontWeight:'bold'}}>Title</Typography></TableCell>
                                <TableCell><Typography variant="GeneralText" sx={{fontWeight:'bold'}}>Destination</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(i => (
                                <StyledTableRow key={i.id}>
                                    <TableCell><img style={{width: '160px', height: '120px'}} src={i.image}
                                                    alt="Destination image"/></TableCell>
                                    <TableCell><Typography variant="GeneralText">{i.title}</Typography></TableCell>
                                    <TableCell><Typography variant="GeneralText">{i.destination}</Typography></TableCell>
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