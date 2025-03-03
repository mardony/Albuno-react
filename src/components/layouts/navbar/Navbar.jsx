import { Link } from "react-router";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css"

export const Navbar = () =>{
    return (
        <nav>
            <Link to="/">
                <img src="https://res.cloudinary.com/dyfyvybx4/image/upload/v1740760756/albuho_yzchfi.jpg" alt="" />
            </Link>
            <ul>
                <li>Cuadernos</li>
                <li>Lapiceros - Colores</li>
                <li>Papeleria</li>
                <li>Juegos - Juguetes</li>
            </ul>
            <Link to="/Cart"> <CartWidget /></Link>
        </nav>
    );
}