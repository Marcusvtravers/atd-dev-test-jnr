import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useState, useEffect, useContext} from "react";
import {UserContext} from "./Home";

function SearchRow() {
    const [userTitle, setUserTitle] = useState({title:'', country:'en'})
    const [userInput, setUserInput] = useContext(UserContext)
    //Need to look into using stacks
    return (
        <Box style={{width:'350px', display:'flex', justifyContent:'space-between'}}>
            <span>Title</span>
            <TextField type="text" size="small" onChange={(e) => setUserTitle(e.target.value)} />
            <Button onClick={() => setUserInput(prevState => ({...prevState, title:userTitle}))}>Search</Button>
        </Box>
    );
}

export default SearchRow;