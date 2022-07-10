import React from 'react';
import {Select, MenuItem, Box, Typography} from '@mui/material'
import {useContext, useState} from "react";
import {UserContext} from "../App";

function Heading(props) {

    const [userInput,setUserInput] =  useContext(UserContext)

    //Setting the user's selected country from User Context
    const [selected, setSelected] = useState(userInput.country)

    //Sets the selected value in the select option and updates the country for the fetch call
     const handleChange = (event) => {
         setSelected(event.target.value);
         setUserInput(prevState => ({...prevState, country:event.target.value}))
     }

    return (
        <Box sx={{display:'flex', width:'100%',justifyContent:'space-between',alignItems:'center', mb:4}}>
            <Box>
                <Typography variant="TitleText">Product search</Typography>
            </Box>
            <Box>

                <Select value={selected} onChange={handleChange}>
                    <MenuItem  disabled>Select a country</MenuItem>
                    <MenuItem value="en">EN</MenuItem>
                    <MenuItem value="en-ie">IE</MenuItem>
                    <MenuItem value="de-de">DE</MenuItem>
                </Select>
            </Box>
        </Box>
    );
}

export default Heading;