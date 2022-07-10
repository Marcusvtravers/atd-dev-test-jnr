import React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {useContext, useState} from 'react';
import {UserContext} from "../App";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function Paginator({totalCount}) {

    const [userInput,setUserInput] =  useContext(UserContext)

    //[pages] is the totalCount divided by the limit, and then each count is pushed to an array which will dictate how many buttons we will have in the paginator
    const [pages] = useState(Array.from({length: Math.ceil(totalCount / userInput.limit)}, (_, index) => index + 1))

    //FirstPageToShow and LastPageToShow will decide which buttons will show
    const [firstPageToShow] = useState(userInput.firstPage)
    const [lastPageToShow] = useState(userInput.lastPage)

    //SelectedButton is to change the color of the button to the corresponding current page
    const [selectedButton] = useState(userInput.selectedButton)

    return (
        <Box >
            {/* Left page button to the first page*/}
            {!pages[selectedButton - 2] ? null :
                <Button onClick={() => setUserInput(prevState => ({...prevState, offset: 0, selectedButton: 1, firstPage:0, lastPage:2}))}><KeyboardDoubleArrowLeftIcon/></Button>}
            {/* Left page button to the previous page */}
            {!pages[selectedButton - 2] ? null :
                selectedButton - 1 === firstPageToShow ? <Button onClick={() => (setUserInput(prevState => ({...prevState, offset: userInput.offset + userInput.limit, selectedButton: userInput.selectedButton - 1, firstPage: firstPageToShow - 1, lastPage: lastPageToShow - 1})))}><KeyboardArrowLeftIcon/></Button>
                : <Button  onClick={() => (setUserInput(prevState => ({...prevState, offset: userInput.offset - userInput.limit, selectedButton: userInput.selectedButton - 1})))}><KeyboardArrowLeftIcon/></Button>}
            {/* List of Buttons */}
            {pages.map((i,key) => {
                if (key >= firstPageToShow && key <= lastPageToShow) {
                    let color = (i === userInput.selectedButton ? '#E5E4E2' : '')
                    return <Button sx={{backgroundColor:color}} variant="outlined" key={i}  onClick={() => setUserInput(prevState => ({...prevState, offset: (i - 1) * userInput.limit, selectedButton:i }))}>{i}</Button>
                }
                })}
            {/* Right page button to the next page */}
            {!pages[selectedButton] ? null :
                (selectedButton - 1 === lastPageToShow) ? <Button onClick={() => (setUserInput(prevState => ({...prevState, offset: userInput.offset + userInput.limit, selectedButton: userInput.selectedButton + 1, firstPage: firstPageToShow + 1, lastPage: lastPageToShow + 1})))}><KeyboardArrowRightIcon/></Button>
                : <Button onClick={() => (setUserInput(prevState => ({...prevState, offset: userInput.offset + userInput.limit, selectedButton: userInput.selectedButton + 1})))}><KeyboardArrowRightIcon/></Button>
            }
            {/* Right page button to the last page*/}
            {!pages[selectedButton] ? null :
                <Button  onClick={() => (setUserInput(prevState => ({...prevState, offset: (pages.length * userInput.limit) - userInput.limit, selectedButton: pages.length, lastPage: pages.length - 1, firstPage:pages.length - 3})))}><KeyboardDoubleArrowRightIcon/></Button>}
                <Box>
            </Box>

        </Box>
    );
}

export default Paginator;
