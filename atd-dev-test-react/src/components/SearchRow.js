import React from 'react';
import {Box, TextField, Button, Typography} from "@mui/material";
import {useState, useEffect, useContext} from "react";
import {UserContext} from "../App";

function SearchRow() {

    const [userTitle, setUserTitle] = useState({title:'', country:'en'})
    const [userInput, setUserInput] = useContext(UserContext)

    //Text field sets the title required for a search and runs the useFetch hook
    return (
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant='GeneralText' sx={{mr:2, ml:2, }}>Title</Typography>
            <TextField sx={{mr:2}} size="small"  onChange={(e) => setUserTitle(e.target.value)} />
            <Button variant="outlined" onClick={() => setUserInput(prevState => ({...prevState, title:userTitle, offset:0, limit:10, firstPage:0, lastPage:2, selectedButton:1}))}>Search</Button>
        </Box>
    );
}

export default SearchRow;