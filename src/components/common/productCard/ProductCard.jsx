import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ item }) => {
    //const {title, price}=props

    return (
        <div className="container-card">
            <img src={item.imagenURL} alt="" />
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <Link to={`/itemDetail/${item.id}`}>Ver Detralle</Link>
        </div>
    );
}
