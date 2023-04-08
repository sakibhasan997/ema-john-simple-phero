import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ Product, handleRemoveFromCart }) => {
    console.log(Product);
    const { img, quantity, id, price, name } = Product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title' >{name}</p>
                <p>Price: <span className='orange-text'>${price}</span> </p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span> </p>

            </div>
            <button onClick={() =>handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItems;