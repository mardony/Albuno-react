import { useEffect, useState } from "react"
import { products } from "../../../products";
import { useParams } from "react-router";


const ItemDetail = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();//{propiedad:valor}


    useEffect(()=>{
        let product = products.find((elemento)=>elemento.id===id);
        setItem(product);
    },[id]);

    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.imagenURL} alt="" />
        </div>
    )
}

export default ItemDetail