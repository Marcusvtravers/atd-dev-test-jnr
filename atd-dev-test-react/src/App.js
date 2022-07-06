import useFetch from './hooks/useFetch'
import {createContext, useState, useEffect} from 'react'
import Home from "./components/Home";


export const UserContext = createContext();
export const DataContext = createContext();
function App() {
    const [userInput, setUserInput] = useState({title:'', country:'en'})

    const {loading, data, error, fetchData} = useFetch('http://localhost/atd-dev-test/php/getProducts.php')

    useEffect(() => {
        fetchData(userInput)
    },[userInput])

    return (
        <UserContext.Provider value={[userInput, setUserInput]}>
        <DataContext.Provider value={data}>
            <div className="App">
                {loading && 'Loading...'}
                {data && <Home />}
                {error && {error}}
            </div>
        </DataContext.Provider>
        </UserContext.Provider>

    );
}

export default App;
