import { FaShoppingCart } from "react-icons/fa";
import "./cartWidget.css";

const CartWidget = () =>{
    return(
        <div className="cart-widget">
            <FaShoppingCart />
            <h4>2</h4>
        </div>
    );
};

export default CartWidget