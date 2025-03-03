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
                <Link to="/category/cuaderno">Cuadernos</Link>
                <Link to="/category/lapicero">Lapiceros</Link>
                <Link to="/category/papeleria">Papeleria</Link>
                <Link to="/category/juego">Juegos</Link>
            </ul>
            <Link to="/Cart"> <CartWidget /></Link>
        </nav>
    );
}