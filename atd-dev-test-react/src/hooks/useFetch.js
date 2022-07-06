import {useEffect, useState} from 'react'

//hook to fetch data from the api
function UseFetch(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const fetchData = async (userInput) => {
        //Set initial loading state to true
        setLoading(true)

        setData("")
        // FormData object appends
        const formData = new FormData();
        formData.append("data", userInput.title === undefined ? '' : userInput.title);
        const formData2 = new FormData();
        formData.append("country", userInput.country === '' ? 'en' : userInput.country);
        console.log(userInput)
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: new URLSearchParams(formData)
            })
            const json = await response.json()
            setData(json)
            setLoading(false)
        }
        catch(err) {
            setLoading(false)
            setError(err)
        }
    }
    return {loading,data,error,fetchData}
}




export default UseFetch;