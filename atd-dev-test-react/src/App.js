
import theme from './CustomStyles/Theme'
import {ThemeProvider} from '@mui/material/styles'
import Box from "@mui/material/Box";
import Heading from "./components/Heading";
import SearchRow from "./components/SearchRow";
import CircularProgress from "@mui/material/CircularProgress";
import ResultsTable from "./components/ResultsTable";
import Paginator from "./components/Paginator";
import NumberOfResults from "./components/NumberOfResults";
import {useEffect, useState} from "react";
import useFetch from "./hooks/useFetch";
import {createContext} from "react";

export const UserContext = createContext();

function App() {

    const AppStyles = {
        width:'100%',
        height:'100vh',
    }

    //The initial state of the UserContext's default values on start up or changes the title, country, or limit
    const [userInput, setUserInput] = useState({title:'', country:'en', offset:0, firstPage:0, lastPage:2, limit:10, selectedButton:1})

    const {loading, data, error, fetchData} = useFetch('http://localhost/atd-dev-test/php/getProducts.php')

    //useEffect set to call the fetchData function each time the userInput changes any context throughout the application
    useEffect(() => {
        fetchData(userInput)
    },[userInput])

    //UserContext is provided to the child components and can update the state throughout the application to initiate a fetch call to update the results
    return (
            <div className="App" style={AppStyles}>
                <ThemeProvider theme={theme}>
                    <UserContext.Provider value={[userInput, setUserInput]}>
                        <Box sx={{p:'16px'}}>
                            <Box sx={{mb: 4}}>
                                <Heading/>
                                <SearchRow/>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'center', mb:2}}>
                                {loading && <CircularProgress sx={{color:'#71797E'}}/>}
                                {data && <ResultsTable data={data.data}/>}
                                {error && (error)}
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'space-around'}}>
                                {data && <Paginator totalCount={data.totalCount}/>}
                                {data && <NumberOfResults totalCount={data.totalCount}/>}
                            </Box>
                        </Box>
                    </UserContext.Provider>

                </ThemeProvider>
            </div>
    );
}

export default App;
