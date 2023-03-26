import { useState , useEffect } from "react"


const useFetch = (url) => {
    const [data , setData] = useState(null)
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(false)
    
    useEffect(()=>{
        const getData = async() => {
            setLoading(true)
            try {
                const req = await fetch(url)
                if(!req.ok){
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
                setLoading(false)
                setError(error.message)
            }
        }
        getData()
    }, [url])

    return {data , error , loading}
}
export { useFetch }