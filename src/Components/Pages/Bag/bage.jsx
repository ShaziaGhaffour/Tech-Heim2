import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import './bage.css';
import Home from '../../Pages/home/home';

const Bag = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://ecomerceapis.runasp.net/api/Cart/GetUserCart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Cart fetch failed');

      const result = await response.json();
      const data = Array.isArray(result) ? result : result.data || [];
      setCarts(data);
    } catch (error) {
      console.error("Unable to get Carts", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (cartId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://ecomerceapis.runasp.net/api/Cart/DeleteCartItem/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) throw new Error('Failed to delete item');
    fetchCarts(); 
  } catch (error) {
    console.error('Delete error:', error);
  }
};


  return (
    <>
         <div className="home-wrapper">
    <div className="home-overlay">
      <Home />
    </div>
    
    <div className="product-overlay">
    <div className="cart-model">
      <div className="product-box">
        {loading ? (
          <p>Loading cart...</p>
        ) : carts.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-product-container">
            {carts.map((value) => (
              <div className="cart-product" key={value.id}>
                <img
                  src={`https://ecomerceapis.runasp.net/${value.productImages}`}
                  alt={value.productName}
                  className="product-image"
                />
                <div className="cart-product-content">
                  <p className="product-name">{value.productName}</p>
                  <p className="product-color">Color: {value.color}</p>
                  <p className="product-quantity">Quantity: {value.quantity}</p>
                </div>
                <FaTrashAlt className="delete-icon" onClick={() => handleDelete(value.id)} />
              </div>
            ))}
          </div>
        )}
        <button className="checkout-btn" onClick={() => navigate('/order')}>Proceed to Cart</button>
      </div>
    </div></div></div>
    {/* <Home /> */}
    </>
  );
};

export default Bag;
