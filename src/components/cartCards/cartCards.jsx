import React from 'react'
import '../../styles/cart.css'
import { MdDelete } from "react-icons/md";
import { useCart } from '../../context/cartContext';
import { useSnackbar } from 'notistack';

function CartCards({ img, name, price, id}) {
    // cart global state
    const { cart, setCart } = useCart();
    const { enqueueSnackbar } = useSnackbar();
    // Function to remove item from cart
    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
        enqueueSnackbar("removed from cart",{variant:'error'})
    };

    return (
        <div className='container'>
            <div>
                <div className="cart-item">
                    <img className="item-img" src={img} alt="product-img" />
                    <div className="item-details">
                        <span>{name}</span>
                        <p>Price: <span className="item-price">${price}</span></p>

                    </div>
                    <button onClick={() => removeFromCart(id)} className="remove-btn"><MdDelete /></button>
                </div>
                <hr />
            </div>
        </div>

    )
}

export default CartCards