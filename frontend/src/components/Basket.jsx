import React from 'react';
import { useCart } from './CartContext';
import '../styles/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat((item?.Rate || '').replace(/[^\d.]/g, '')) || 0;
    return sum + price * item.quantity;
  }, 0);

  const handleConfirmOrder = () => {
    toast.success('✅ Order confirmed!');
    clearCart();
  };

  const handleRemove = (index, item) => {
    removeFromCart(index);
    toast.error(`❌ ${item.Name} removed from cart`);
  };

  const handleQuantityUpdate = (index, newQty, item) => {
    updateQuantity(index, newQty);
    toast.info(`${item.Name} quantity updated to ${newQty}`);
  };

  return (
    <div className="basket-section">
      <h2 className="title">Your Basket</h2>

      {cartItems.length === 0 ? (
        <p className="title-text">Your basket is empty.</p>
      ) : (
        <>
          <div className="card-section">
            {cartItems.map((item, index) => (
              <div className="card" key={index}>
                <div className="cardimg-layer">
                  <img
                    src={item.logo}
                    alt={item.Name}
                    width="200"
                    height="200"
                    className="card-image"
                  />
                </div>
                <div className="card-details">
                  <p className="card-title">{item.Name}</p>
                  <p className="card-rate">{item.Rate}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityUpdate(index, item.quantity - 1, item)}
                      disabled={item.quantity <= 1}
                    >
                      ➖
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityUpdate(index, item.quantity + 1, item)}
                    >
                      ➕
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(index, item)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="basket-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button className="confirm-btn" onClick={handleConfirmOrder}>
              ✅ Confirm Order
            </button>
            <button className="continue-btn" onClick={() => navigate('/menu')}>
              🛒 Continue Shopping
            </button>
          </div>
        </>
      )}

      {/* Contact Us Section */}
      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">We’d love to hear from you! Drop us a message.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Basket;
