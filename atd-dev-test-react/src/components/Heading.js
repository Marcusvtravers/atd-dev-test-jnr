import React from 'react';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';
import {useContext, useState} from "react";
import {UserContext} from "../App";

function Heading(props) {

    const [userInput,setUserInput] =  useContext(UserContext)
    const [selected, setSelected] = useState(userInput.country)

     const handleChange = (event) => {
         console.log(event.target.value);
         setSelected(event.target.value);
         setUserInput(prevState => ({...prevState, country:event.target.value}))
     }

    return (
        <Box>
            <h1>Product search</h1>
            <Select  value={selected} onChange={handleChange}>
                <MenuItem  disabled>Select a country</MenuItem>
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="en-ie">IE</MenuItem>
                <MenuItem value="de-de">DE</MenuItem>
            </Select>
        </Box>
    );
}

export default Heading;