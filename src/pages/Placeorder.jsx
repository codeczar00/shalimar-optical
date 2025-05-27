import { useContext, useState } from "react";
import { CartContext } from "../data/CartProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './Placeorder.css';

const Order = () => {
  const { cartItems } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [final, setFinal] = useState(false);

  // const orderApiUrl = import.meta.env.VITE_ORDER_API_URL;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const onSubmit = async (data) => {
    const orderData = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      city: data.city,
      items: cartItems,
    };

    setFinal(true);

    // try {
    //   const res = await axios.post(orderApiUrl, orderData);
    //   console.log(res.data);  // The created order JSON
    //   
    // } catch (err) {
    //   if (err.response) {
    //     console.error('Order failed:', err.response.data);
    //   } else if (err.request) {
    //     console.error('No response:', err.request);
    //   } else {
    //     console.error('Error:', err.message);
    //   }
    // }
  };

  return (
    <>
      {final ? (
        <div className="thank-you-container">
          <div className="thank-you-card">
            <h1 className="thank-you-title">Thank You for Shopping at Shalimar Optical!</h1>
            <p className="thank-you-message">Your order has been received and is being processed. Our team
              will contact you regarding prescription!
            </p>
            <p className="order-details">Order ID: #{Math.floor(Math.random() * 1000000)}</p>
            <Link to="/"><button className="continue-shopping-btn">Continue Shopping</button></Link>
          </div>
        </div>
      ) : (
        <>
          <h1 className="order-title">Place Your Order</h1>
          <div className="order-container">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="order-items">
                {cartItems.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="item-image">
                      <img src={item.picture} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.brand} {item.name}</h3>
                      <div className="item-specs">
                        <span className="spec">{item.size}</span>
                        <span className="spec">{item.selectedOption.split(':')[0].trim()}</span>
                        <span className="spec">Qty: {item.quantity}</span>
                      </div>
                      <p className="item-price">Rs {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>Rs {calculateTotal().toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>Rs {calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="delivery-form">
              <h2>Delivery Information</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <span className="error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    placeholder="03xxxxxxxxx"
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{11}$/,
                        message: "Please enter a valid 11-digit phone number"
                      }
                    })}
                  />
                  {errors.phone && <span className="error">{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="address">Delivery Address</label>
                  <textarea
                    id="address"
                    rows="4"
                    {...register("address", { required: "Address is required" })}
                  />
                  {errors.address && <span className="error">{errors.address.message}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      type="text"
                      {...register("city", {
                        required: "City is required",
                        maxLength: {
                          value: 30,
                          message: "City must be at most 30 characters",
                        },
                      })}
                    />
                    {errors.city && <span className="error">{errors.city.message}</span>}
                  </div>
                </div>

                <div className="payment-method">
                  <h3>Payment Method</h3>
                  <div className="payment-option">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      value="cod"
                      defaultChecked
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                  </div>
                </div>

                <button type="submit" className="place-order-btn">Place Order</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Order;