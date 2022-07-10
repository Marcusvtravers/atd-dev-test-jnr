import React from 'react';
import {Select,MenuItem, Typography, Box} from "@mui/material";
import {useContext} from "react";
import {UserContext} from "../App";

function NumberOfResults({totalCount}) {

    const [userInput,setUserInput] =  useContext(UserContext)

    //Displays the number of results, the Select changes the limit for the number of entries to be displayed. If there are no results, do not display this component
    return (
        <>
        {totalCount && <Box sx={{display:'flex', alignItems: 'center'}}>
            <Typography sx={{mr:2}}>{userInput.offset  + 1} - {userInput.offset >= totalCount - userInput.limit ? totalCount  :  userInput.offset + userInput.limit}  of {totalCount}</Typography>
            <Typography sx={{mr:2}}>Rows per page:</Typography>
            <Select size="small" value={userInput.limit} onChange={(e) => setUserInput(prevState => ({...prevState,limit:parseInt(e.target.value), offset:0, selectedButton:1, firstPage:0, lastPage:2}))}>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="25">25</MenuItem>
                <MenuItem value="50">50</MenuItem>
            </Select>
        </Box>}
            </>
    );
}

export default NumberOfResults;