import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () =>{
    return (
        <nav>
            <h2>ALBUHO</h2>
            <ul>
                <li>Cuadernos</li>
                <li>Lapiceros - Colores</li>
                <li>Papeleria</li>
                <li>Juegos - Juguetes</li>
            </ul>
            <CartWidget/>
        </nav>
    );
}