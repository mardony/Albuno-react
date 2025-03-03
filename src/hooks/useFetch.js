import { useEffect, useState } from "react"

export const useFetch = (endpoint, valorInicial = []) => {

    const [data, setData]=useState(valorInicial);
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setIsLoading(true)
        const getData =fetch(endpoint);
        //tiempo de carga de la Api
        setTimeout(()=>{
            getData
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((error)=>setError(error))
                .finally(()=> setIsLoading(false));

        }, 2000);

    }, [endpoint]);

    return {data,isLoading,error};
}
