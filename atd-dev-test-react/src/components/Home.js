import {useState, useEffect, useContext} from 'react';
import Heading from './Heading'
import {UserContext} from '../App'
import ResultsTable from './ResultsTable'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'

function Home({data}) {
    const [userTitle, setUserTitle] = useState("")
    const [userInput,setUserInput] =  useContext(UserContext)

    return (


        <Box sx={{p:'16px'}}>
            <Heading/>

            <TextField type="text" size="small" onChange={(e) => setUserTitle(e.target.value)} />
            <Button onClick={() => setUserInput(prevState => ({...prevState, title:userTitle}))}>Search</Button>

            <ResultsTable/>
        </Box>
    );
}

export default Home;