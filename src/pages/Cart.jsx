import { useContext, useEffect, useState } from "react";
import { CartContext } from "../data/CartProvider";
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const {cartItems, setCartItems} = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // Calculate total cost whenever cartItems changes
    const calculatedTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalCost(calculatedTotal);
  }, [cartItems]);

  const handleDelete = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return; 
    
    const newCartItems = [...cartItems];
    newCartItems[index] = {
      ...newCartItems[index],
      quantity: newQuantity
    };
    setCartItems(newCartItems);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/"><button className="continue-shopping">Continue Shopping</button></Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-image">
                  <img src={item.picture} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span> {item.quantity} </span>
                    <button 
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>Price: {item.price.toFixed(2)}</p>
                  <p>Total: {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <Link 
                    to={`/product/${item.id}`} 
                    className="edit-button"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs: {totalCost.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>Rs: {totalCost.toFixed(2)}</span>
            </div>
            <Link to={'/place-order'}><button className="checkout-button">Proceed to Checkout</button></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;