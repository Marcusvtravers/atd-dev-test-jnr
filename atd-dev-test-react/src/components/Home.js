import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../App'

function Home({data}) {
    const [userTitle, setUserTitle] = useState("")

    const [userInput,setUserInput] =  useContext(UserContext)
    const [selected, setSelected] = useState(userInput.country)

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        setUserInput(prevState => ({...prevState, country:event.target.value}))
    };

    return (
        <>
            <input type="text" onChange={(e) => setUserTitle(e.target.value)} />
            <button onClick={() => setUserInput(prevState => ({...prevState, title:userTitle}))}>Search</button>
            <select  value={selected} onChange={handleChange}>
                <option  disabled>Select a country</option>
                <option value="en">EN</option>
                <option value="en-ie">IE</option>
                <option value="de-de">DE</option>
            </select>
        </>
    );
}

export default Home;