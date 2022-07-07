import {useState, useEffect, useContext} from 'react';
import Heading from './Heading'

import ResultsTable from './ResultsTable'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import useFetch from "../hooks/useFetch";
import SearchRow from './SearchRow'
import {createContext} from "react";
export const UserContext = createContext();
export const DataContext = createContext();


function Home() {
    const [userInput, setUserInput] = useState({title:'', country:'en'})
    const {loading, data, error, fetchData} = useFetch('http://localhost/atd-dev-test/php/getProducts.php')

    useEffect(() => {
        fetchData(userInput)
    },[userInput])
    //Need to look into using stacks
    return (
        <UserContext.Provider value={[userInput, setUserInput]}>
            <Box sx={{p:'16px'}}>
                <Box>
                    <Heading/>
                    <SearchRow/>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    {loading && <CircularProgress/>}
                    {data && <ResultsTable data={data.data}/>}
                    {error && (error)}
                </Box>
            </Box>

        </UserContext.Provider>
    );
}

export default Home;