import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";
import { addAddress, getAddress } from "../../../API/Checkout";
import Footer from '../../../Components/HomePagecomponents/Footer/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [addressInput, setAddressInput] = useState({
    city: "",
    street: "",
    postalCode: "",
    region: "",
  });
  const [savedAddress, setSavedAddress] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToggleAddress = () => {
    setShowAddressFields(!showAddressFields);
  };

  const handleChange = (e) => {
    setAddressInput({ ...addressInput, [e.target.name]: e.target.value });
  };

  const handleSubmitAddress = async () => {
    const userId = localStorage.getItem("userId");
    const payload = { ...addressInput, userId };

    if (
      !addressInput.city.trim() ||
      !addressInput.street.trim() ||
      !addressInput.postalCode.trim() ||
      !addressInput.region.trim()
    ) {
      alert("Please fill all address fields");
      return;
    }

    try {
      const res = await addAddress(payload);
      if (res.message === "Address Added Successfully" || res.isSuccess) {
        alert(" Address added successfully!");
        setShowAddressFields(false);
        setAddressInput({ city: "", street: "", postalCode: "", region: "" });
        fetchSavedAddress();
      } else {
        alert(" Failed to add address. Please try again.");
      }
    } catch (error) {
      console.error("Error adding address:", error);
      alert("Network error while adding address.");
    }
  };

  const handleContinueToPay = () => {
    if (!savedAddress) {
      alert(" Please add a delivery address first");
      return;
    }
    if (cartItems.length === 0) {
      alert(" Your cart is empty");
      return;
    }
    navigate('/Orders', {
      state: {
        orderedItems: cartItems,
        deliveryAddress: savedAddress
      }
    });
  };

  const fetchSavedAddress = async () => {
    try {
      const res = await getAddress();
      if (res.isSuccess && res.data.length > 0) {
        const latestAddress = res.data[res.data.length - 1];
        setSavedAddress(latestAddress);
      } else {
        setSavedAddress(null);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      alert(" Network error while fetching address.");
    }
  };

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        setCartItems(JSON.parse(cartData));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
    fetchSavedAddress();
    setLoading(false);
  }, []);

  return (
    <>
      <div className="cart-icons">
        <div className="cart-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#78ABF9"/>
<path d="M24.0007 32.6667C20.8807 32.6667 18.334 30.12 18.334 27C18.334 26.4533 18.7873 26 19.334 26C19.8807 26 20.334 26.4533 20.334 27C20.334 29.0267 21.974 30.6667 24.0007 30.6667C26.0273 30.6667 27.6673 29.0267 27.6673 27C27.6673 26.4533 28.1207 26 28.6673 26C29.214 26 29.6673 26.4533 29.6673 27C29.6673 30.12 27.1207 32.6667 24.0007 32.6667Z" fill="white"/>
<path d="M14.9205 16.5066C14.6672 16.5066 14.4005 16.3999 14.2138 16.2133C13.8272 15.8266 13.8272 15.1866 14.2138 14.7999L19.0538 9.95992C19.4405 9.57326 20.0805 9.57326 20.4672 9.95992C20.8538 10.3466 20.8538 10.9866 20.4672 11.3733L15.6272 16.2133C15.4272 16.3999 15.1738 16.5066 14.9205 16.5066Z" fill="white"/>
<path d="M33.0808 16.5066C32.8275 16.5066 32.5741 16.4133 32.3741 16.2133L27.5341 11.3733C27.1475 10.9866 27.1475 10.3466 27.5341 9.95992C27.9208 9.57326 28.5608 9.57326 28.9475 9.95992L33.7875 14.7999C34.1741 15.1866 34.1741 15.8266 33.7875 16.2133C33.6008 16.3999 33.3341 16.5066 33.0808 16.5066Z" fill="white"/>
<path d="M34.946 22.1334C34.8527 22.1334 34.7593 22.1334 34.666 22.1334H34.3594H13.3327C12.3993 22.1467 11.3327 22.1467 10.5593 21.3734C9.94602 20.7734 9.66602 19.84 9.66602 18.4667C9.66602 14.8 12.346 14.8 13.626 14.8H34.3727C35.6527 14.8 38.3327 14.8 38.3327 18.4667C38.3327 19.8534 38.0527 20.7734 37.4393 21.3734C36.746 22.0667 35.8127 22.1334 34.946 22.1334ZM13.626 20.1334H34.6794C35.2794 20.1467 35.8394 20.1467 36.026 19.96C36.1194 19.8667 36.3193 19.5467 36.3193 18.4667C36.3193 16.96 35.946 16.8 34.3594 16.8H13.626C12.0393 16.8 11.666 16.96 11.666 18.4667C11.666 19.5467 11.8793 19.8667 11.9593 19.96C12.146 20.1334 12.7193 20.1334 13.306 20.1334H13.626Z" fill="white"/>
<path d="M27.8537 38.3332H19.8137C15.0403 38.3332 13.9737 35.4933 13.5603 33.0266L11.6803 21.4932C11.587 20.9466 11.9603 20.4399 12.507 20.3466C13.0403 20.2533 13.5603 20.6266 13.6537 21.1733L15.5337 32.6933C15.9203 35.0533 16.7203 36.3332 19.8137 36.3332H27.8537C31.2803 36.3332 31.667 35.1333 32.107 32.8133L34.347 21.1466C34.4537 20.5999 34.9737 20.2399 35.5203 20.3599C36.067 20.4666 36.4137 20.9866 36.307 21.5332L34.067 33.1999C33.547 35.9066 32.6803 38.3332 27.8537 38.3332Z" fill="white"/>
</svg>

          <p style={{ color: "rgb(12, 104, 244)" }}>Cart</p>
        </div>

        <div className="cart-icon">
          <svg width="52" height="52" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="69" height="69" rx="34.5" stroke="#0C68F4" stroke-width="3"/>
<path d="M38 41.5H16C15.18 41.5 14.5 40.82 14.5 40V24C14.5 18.76 18.76 14.5 24 14.5H42C42.82 14.5 43.5 15.18 43.5 16V36C43.5 39.04 41.04 41.5 38 41.5ZM17.5 38.5H38C39.38 38.5 40.5 37.38 40.5 36V17.5H24C20.42 17.5 17.5 20.42 17.5 24V38.5Z" fill="#0C68F4"/>
<path d="M50 53.5H48C47.18 53.5 46.5 52.82 46.5 52C46.5 50.62 45.38 49.5 44 49.5C42.62 49.5 41.5 50.62 41.5 52C41.5 52.82 40.82 53.5 40 53.5H32C31.18 53.5 30.5 52.82 30.5 52C30.5 50.62 29.38 49.5 28 49.5C26.62 49.5 25.5 50.62 25.5 52C25.5 52.82 24.82 53.5 24 53.5H22C17.86 53.5 14.5 50.14 14.5 46V40C14.5 39.18 15.18 38.5 16 38.5H38C39.38 38.5 40.5 37.38 40.5 36V22C40.5 21.18 41.18 20.5 42 20.5H45.68C47.66 20.5 49.48 21.56 50.46 23.28L53.88 29.26C54.14 29.72 54.14 30.3 53.88 30.76C53.62 31.22 53.12 31.5 52.58 31.5H50C49.72 31.5 49.5 31.72 49.5 32V38C49.5 38.28 49.72 38.5 50 38.5H56C56.82 38.5 57.5 39.18 57.5 40V46C57.5 50.14 54.14 53.5 50 53.5ZM49.3 50.5H50C52.48 50.5 54.5 48.48 54.5 46V41.5H50C48.08 41.5 46.5 39.92 46.5 38V32C46.5 30.08 48.06 28.5 50 28.5L47.86 24.76C47.42 23.98 46.58 23.5 45.68 23.5H43.5V36C43.5 39.04 41.04 41.5 38 41.5H17.5V46C17.5 48.48 19.52 50.5 22 50.5H22.7C23.36 48.2 25.48 46.5 28 46.5C30.52 46.5 32.64 48.2 33.3 50.5H38.72C39.38 48.2 41.5 46.5 44.02 46.5C46.54 46.5 48.64 48.2 49.3 50.5Z" fill="#0C68F4"/>
<path d="M28 57.5C24.96 57.5 22.5 55.04 22.5 52C22.5 48.96 24.96 46.5 28 46.5C31.04 46.5 33.5 48.96 33.5 52C33.5 55.04 31.04 57.5 28 57.5ZM28 49.5C26.62 49.5 25.5 50.62 25.5 52C25.5 53.38 26.62 54.5 28 54.5C29.38 54.5 30.5 53.38 30.5 52C30.5 50.62 29.38 49.5 28 49.5Z" fill="#0C68F4"/>
<path d="M44 57.5C40.96 57.5 38.5 55.04 38.5 52C38.5 48.96 40.96 46.5 44 46.5C47.04 46.5 49.5 48.96 49.5 52C49.5 55.04 47.04 57.5 44 57.5ZM44 49.5C42.62 49.5 41.5 50.62 41.5 52C41.5 53.38 42.62 54.5 44 54.5C45.38 54.5 46.5 53.38 46.5 52C46.5 50.62 45.38 49.5 44 49.5Z" fill="#0C68F4"/>
<path d="M56 41.5H50C48.08 41.5 46.5 39.92 46.5 38V32C46.5 30.08 48.08 28.5 50 28.5H52.58C53.12 28.5 53.62 28.78 53.88 29.26L57.3 35.26C57.42 35.48 57.5 35.74 57.5 36V40C57.5 40.82 56.82 41.5 56 41.5ZM50 31.5C49.72 31.5 49.5 31.72 49.5 32V38C49.5 38.28 49.72 38.5 50 38.5H54.5V36.4L51.7 31.5H50Z" fill="#0C68F4"/>
</svg>

          <p className="checkout-para">Checkout</p>
        </div>

        <div className="cart-icon">
          <svg className="payment-svg" width="48" height="48" viewBox="0 0 48 48" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#9E9E9E" />
            <path
              d="M37.3327 20.3333H10.666C10.1193 20.3333 9.66602 19.8799 9.66602 19.3333C9.66602 18.7866 10.1193 18.3333 10.666 18.3333H37.3327C37.8794 18.3333 38.3327 18.7866 38.3327 19.3333C38.3327 19.8799 37.8794 20.3333 37.3327 20.3333Z"
              fill="white" />
            <path
              d="M18.6667 31H16C15.4533 31 15 30.5467 15 30C15 29.4533 15.4533 29 16 29H18.6667C19.2133 29 19.6667 29.4533 19.6667 30C19.6667 30.5467 19.2133 31 18.6667 31Z"
              fill="white" />
            <path
              d="M27.3333 31H22C21.4533 31 21 30.5467 21 30C21 29.4533 21.4533 29 22 29H27.3333C27.88 29 28.3333 29.4533 28.3333 30C28.3333 30.5467 27.88 31 27.3333 31Z"
              fill="white" />
            <path
              d="M31.4127 36.3334H16.586C11.2793 36.3334 9.66602 34.7334 9.66602 29.4801V18.5201C9.66602 13.2667 11.2793 11.6667 16.586 11.6667H31.3993C36.706 11.6667 38.3193 13.2667 38.3193 18.5201V29.4667C38.3327 34.7334 36.7193 36.3334 31.4127 36.3334ZM16.586 13.6667C12.3993 13.6667 11.666 14.3867 11.666 18.5201V29.4667C11.666 33.6001 12.3993 34.3201 16.586 34.3201H31.3993C35.586 34.3201 36.3193 33.6001 36.3193 29.4667V18.5201C36.3193 14.3867 35.586 13.6667 31.3993 13.6667H16.586Z"
              fill="white" />
          </svg>
          <p>Order</p>
        </div>
      </div>
      <div className="checkout-container">
        <div className="checkout-left">
          <div className="form-group">
            <label>User</label>
            <input type="text" className="input" placeholder="Jimmy Smith" readOnly />
          </div>

          <div className="address-section">
            <p className="section-title">Add Address</p>
            <div className="add-address-box" onClick={handleToggleAddress}>
              Add Address <i className="fas fa-map-marker-alt icon"></i>
            </div>

            {showAddressFields && (
              <div className="address-fields">
                {["city", "street", "postalCode", "region"].map((field) => (
                  <div className="form-group" key={field}>
                    <label htmlFor={field}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </label>
                    <input
                      type="text"
                      id={`add${field}`}
                      name={field}
                      className="input"
                      placeholder={`Enter ${field}`}
                      value={addressInput[field]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
                <button className="submit-btn" onClick={handleSubmitAddress}>
                  Submit
                </button>
              </div>
            )}
          </div>

          <div className="display-address">
            <p className="section-title">Saved Address</p>
            {savedAddress ? (
              <table className="address-table">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Street</th>
                    <th>Postal Code</th>
                    <th>Region</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{savedAddress.city || "N/A"}</td>
                    <td>{savedAddress.street || "N/A"}</td>
                    <td>{savedAddress.postalCode || "N/A"}</td>
                    <td>{savedAddress.region || "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>No saved address found.</p>
            )}
          </div>
        </div>

        <div className="checkout-right">
          <div className="order-summary">
            <p className="summary-title">Your Order</p>
            <div id="order-details">
              {loading ? (
                <p>Loading cart items...</p>
              ) : cartItems.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    className="card mb-3 p-3 shadow-sm"
                    key={index}
                    style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <img
                      src={
                        item.productImagePath?.startsWith("http")
                          ? item.productImagePath
                          : item.productImagePath
                            ? `https://ecomerceapis.runasp.net${item.productImagePath}`
                            : "/placeholder.jpg"
                      }
                      alt={item.productName || "Product"}
                      className="img-fluid"
                      style={{ maxWidth: "100px" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/public/blog image.svg";
                      }}
                    />
                    <div>
                      <p>
                        <strong>Product:</strong> {item.productName}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {item.quantity}
                      </p>
                      <p>
                        <strong>Total:</strong> ${item.price}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <button className="pay-btn" onClick={handleContinueToPay}>
            Continue to Pay
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;