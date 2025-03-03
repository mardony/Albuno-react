import { useState, useEffect } from "react";

const Counter = ({darkMode}) => {
    const[contador,setContador]=useState(0)

    const sumar = ()=>{
        setContador(contador+1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    console.log("Petición fuera del effect")

    useEffect(()=>{
        console.log("Server in Japan")
    },[darkMode])

    return (
    <div>
        <h2>{contador}</h2>

        <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
    </div>
    )
}

export default Counter
