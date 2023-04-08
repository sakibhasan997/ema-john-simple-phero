import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItems from '../ReviewItem/ReviewItems';
import './Orders.css';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    
        const handleRemoveFromCart = (id) => {
            const remaining = cart.filter(Product => Product.id !== id);
            setCart(remaining);
            removeFromDb(id);
        }

    

    return (
        <>
            <div className="shop-container">
                <div className="review-container">
                    {
                        savedCart.map(Product => (<ReviewItems
                            key={Product.id}
                            Product={Product}
                            handleRemoveFromCart={handleRemoveFromCart}
                        ></ReviewItems>))
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}

                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Orders;