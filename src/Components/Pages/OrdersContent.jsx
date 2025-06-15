import React, { useEffect, useState } from 'react';
import "../../CSS/OrdersContent.css";
import Footer from '../../Components/HomePagecomponents/Footer/Footer';

const OrdersContent = () => {
    const token = localStorage.getItem("token");
    const [orders, setOrders] = useState([]);
    const [showPaymentSection, setShowPaymentSection] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [discountCode, setDiscountCode] = useState('');
    
    useEffect(() => {
        async function GetOrders() {
            try {
                const response = await fetch("https://ecomerceapis.runasp.net/api/Order/GetOrders", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                console.log("Orders API Response:", result);
                if (result.isSuccess && result.data && Array.isArray(result.data)) {
                    setOrders(result.data);
                } else {
                    console.warn("Unexpected API response structure", result);
                    setOrders([]); 
                }
            } catch (error) {
                console.error("Failed to fetch orders:", error);
                setOrders([]); 
            }
        }
        
        if (token) { 
            GetOrders();
        }
    }, [token]); 

    const handlePayNow = (order) => {
        setSelectedOrder(order);
        setShowPaymentSection(true);
    };

    const handleReturnToCheckout = () => {
        setShowPaymentSection(false);
        setSelectedOrder(null);
    };

    const handleApplyDiscount = () => {
        console.log('Applying discount code:', discountCode);
    };

    const handleContinuePayment = () => {
        console.log('Processing payment for order:', selectedOrder?.orderId);
    };
    
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
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#78ABF9"/>
<path d="M25.3327 27.6667H10.666C10.1193 27.6667 9.66602 27.2134 9.66602 26.6667V16.0001C9.66602 12.5067 12.506 9.66675 15.9993 9.66675H27.9993C28.546 9.66675 28.9993 10.1201 28.9993 10.6667V24.0001C28.9993 26.0267 27.3593 27.6667 25.3327 27.6667ZM11.666 25.6667H25.3327C26.2527 25.6667 26.9993 24.9201 26.9993 24.0001V11.6667H15.9993C13.6127 11.6667 11.666 13.6134 11.666 16.0001V25.6667Z" fill="white"/>
<path d="M33.3327 35.6667H31.9993C31.4527 35.6667 30.9993 35.2134 30.9993 34.6667C30.9993 33.7467 30.2527 33.0001 29.3327 33.0001C28.4127 33.0001 27.666 33.7467 27.666 34.6667C27.666 35.2134 27.2127 35.6667 26.666 35.6667H21.3327C20.786 35.6667 20.3327 35.2134 20.3327 34.6667C20.3327 33.7467 19.586 33.0001 18.666 33.0001C17.746 33.0001 16.9993 33.7467 16.9993 34.6667C16.9993 35.2134 16.546 35.6667 15.9993 35.6667H14.666C11.906 35.6667 9.66602 33.4267 9.66602 30.6667V26.6667C9.66602 26.1201 10.1193 25.6667 10.666 25.6667H25.3327C26.2527 25.6667 26.9993 24.9201 26.9993 24.0001V14.6667C26.9993 14.1201 27.4527 13.6667 27.9993 13.6667H30.4527C31.7727 13.6667 32.986 14.3734 33.6394 15.5201L35.9194 19.5068C36.0927 19.8134 36.0927 20.2001 35.9194 20.5068C35.746 20.8134 35.4127 21.0001 35.0527 21.0001H33.3327C33.146 21.0001 32.9993 21.1467 32.9993 21.3334V25.3334C32.9993 25.5201 33.146 25.6667 33.3327 25.6667H37.3327C37.8793 25.6667 38.3327 26.1201 38.3327 26.6667V30.6667C38.3327 33.4267 36.0927 35.6667 33.3327 35.6667ZM32.866 33.6667H33.3327C34.986 33.6667 36.3327 32.3201 36.3327 30.6667V27.6667H33.3327C32.0527 27.6667 30.9993 26.6134 30.9993 25.3334V21.3334C30.9993 20.0534 32.0393 19.0001 33.3327 19.0001L31.906 16.5068C31.6127 15.9868 31.0527 15.6667 30.4527 15.6667H28.9993V24.0001C28.9993 26.0267 27.3593 27.6667 25.3327 27.6667H11.666V30.6667C11.666 32.3201 13.0127 33.6667 14.666 33.6667H15.1327C15.5727 32.1334 16.986 31.0001 18.666 31.0001C20.346 31.0001 21.7593 32.1334 22.1993 33.6667H25.8127C26.2527 32.1334 27.666 31.0001 29.346 31.0001C31.026 31.0001 32.426 32.1334 32.866 33.6667Z" fill="white"/>
<path d="M18.6667 38.3333C16.64 38.3333 15 36.6933 15 34.6667C15 32.64 16.64 31 18.6667 31C20.6933 31 22.3333 32.64 22.3333 34.6667C22.3333 36.6933 20.6933 38.3333 18.6667 38.3333ZM18.6667 33C17.7467 33 17 33.7467 17 34.6667C17 35.5867 17.7467 36.3333 18.6667 36.3333C19.5867 36.3333 20.3333 35.5867 20.3333 34.6667C20.3333 33.7467 19.5867 33 18.6667 33Z" fill="white"/>
<path d="M29.3327 38.3333C27.306 38.3333 25.666 36.6933 25.666 34.6667C25.666 32.64 27.306 31 29.3327 31C31.3593 31 32.9993 32.64 32.9993 34.6667C32.9993 36.6933 31.3593 38.3333 29.3327 38.3333ZM29.3327 33C28.4127 33 27.666 33.7467 27.666 34.6667C27.666 35.5867 28.4127 36.3333 29.3327 36.3333C30.2527 36.3333 30.9993 35.5867 30.9993 34.6667C30.9993 33.7467 30.2527 33 29.3327 33Z" fill="white"/>
<path d="M37.3333 27.6667H33.3333C32.0533 27.6667 31 26.6133 31 25.3333V21.3333C31 20.0533 32.0533 19 33.3333 19H35.0533C35.4133 19 35.7467 19.1867 35.92 19.5067L38.2 23.5067C38.28 23.6533 38.3333 23.8267 38.3333 24V26.6667C38.3333 27.2133 37.88 27.6667 37.3333 27.6667ZM33.3333 21C33.1467 21 33 21.1467 33 21.3333V25.3333C33 25.52 33.1467 25.6667 33.3333 25.6667H36.3333V24.2667L34.4667 21H33.3333Z" fill="white"/>
</svg>


          <p className="checkout-para"style={{ color: "rgb(12, 104, 244)" }}>Checkout</p>
        </div>

        <div className="cart-icon">
         <svg width="52" height="52" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="69" height="69" rx="34.5" stroke="#0C68F4" stroke-width="3"/>
<path d="M56 30.5H16C15.18 30.5 14.5 29.82 14.5 29C14.5 28.18 15.18 27.5 16 27.5H56C56.82 27.5 57.5 28.18 57.5 29C57.5 29.82 56.82 30.5 56 30.5Z" fill="#0C68F4"/>
<path d="M28 46.5H24C23.18 46.5 22.5 45.82 22.5 45C22.5 44.18 23.18 43.5 24 43.5H28C28.82 43.5 29.5 44.18 29.5 45C29.5 45.82 28.82 46.5 28 46.5Z" fill="#0C68F4"/>
<path d="M41 46.5H33C32.18 46.5 31.5 45.82 31.5 45C31.5 44.18 32.18 43.5 33 43.5H41C41.82 43.5 42.5 44.18 42.5 45C42.5 45.82 41.82 46.5 41 46.5Z" fill="#0C68F4"/>
<path d="M47.12 54.5H24.88C16.92 54.5 14.5 52.1 14.5 44.22V27.78C14.5 19.9 16.92 17.5 24.88 17.5H47.1C55.06 17.5 57.48 19.9 57.48 27.78V44.2C57.5 52.1 55.08 54.5 47.12 54.5ZM24.88 20.5C18.6 20.5 17.5 21.58 17.5 27.78V44.2C17.5 50.4 18.6 51.48 24.88 51.48H47.1C53.38 51.48 54.48 50.4 54.48 44.2V27.78C54.48 21.58 53.38 20.5 47.1 20.5H24.88Z" fill="#0C68F4"/>
</svg>

          <p style={{ color: "rgb(12, 104, 244)" }}>Order</p>
        </div>
      </div>
            <div className="orders-container">
                {!showPaymentSection ? (
                    <>
                        <div className="heading">Order History</div>
                        <div className="para">Track, return or purchase items</div>
                        
                        {orders.length === 0 ? (
                            <div className="no-orders">No orders found</div>
                        ) : (
                            orders.map((order, index) => (
                                <div key={order.orderId || index} className="order-wrapper">
                                    <div className="history-content">
                                        <div className="headings">
                                            <div className="heading">Order ID</div>
                                            <div className="value">{order.orderId}</div>
                                        </div>
                                        <div className="headings">
                                            <div className="heading">Placed on</div>
                                            <div className="value">{new Date(order.orderDate).toLocaleDateString()}</div>
                                        </div>
                                        <div className="headings">
                                            <div className="heading">Total</div>
                                            <div className="value">Rs. {order.totalAmount}</div>
                                        </div>
                                        <div className="headings">
                                            <div className="heading">Status</div>
                                            <div className="value">{order.status}</div>
                                        </div>
                                        <div className="headings">
                                            <div className="heading">City</div>
                                            <div className="value">{order.city}</div>
                                        </div>
                                        <div className="order-actions">
                                            <button 
                                                className="pay-now-btn"
                                                onClick={() => handlePayNow(order)}
                                            >
                                                Pay Now
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {order.items?.length > 0 && order.items[0].productImagePath && (
                                        <div className="history-content-images">
                                            <img
                                                src={`https://ecomerceapis.runasp.net/${order.items[0].productImagePath}`}
                                                alt="Product"
                                                style={{ maxWidth: "100px" }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none'; 
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </>
                ) : (
                    <div className="payment-section">
                        <div className="payment-container">
                            <div className="payment-left">
                                <div className="payment-methods">
                                    <h3>Payment</h3>
                                    
                                    <div className="payment-option">
                                        <input 
                                            type="radio" 
                                            id="credit-card" 
                                            name="payment-method" 
                                            value="credit-card"
                                            checked={paymentMethod === 'credit-card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="credit-card">Credit Cards</label>
                                        <div className="card-icons">
                                            <span className="card-icon">💳</span>
                                            <span className="add-card">+</span>
                                        </div>
                                    </div>
                                    
                                    <div className="payment-option">
                                        <input 
                                            type="radio" 
                                            id="paypal" 
                                            name="payment-method" 
                                            value="paypal"
                                            checked={paymentMethod === 'paypal'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div className="billing-address">
                                    <h3>Billing address</h3>
                                    <div className="address-input">
                                        <input 
                                            type="text" 
                                            placeholder="Same as shipping address"
                                            className="address-field"
                                        />
                                        <span className="edit-icon">✏️</span>
                                    </div>
                                </div>

                                <button 
                                    className="return-checkout-btn"
                                    onClick={handleReturnToCheckout}
                                >
                                    Return to checkout
                                </button>
                            </div>

                            <div className="payment-right">
                                <div className="order-summary">
                                    <h3>Your Order</h3>
                                    
                                    {selectedOrder && selectedOrder.items && selectedOrder.items.map((item, index) => (
                                        <div key={index} className="order-item">
                                            <img 
                                                src={`https://ecomerceapis.runasp.net/${item.productImagePath}`}
                                                alt={item.productName || "Product"}
                                                className="order-item-image"
                                                onError={(e) => {
                                                    e.target.style.display = 'none'; 
                                                }}
                                            />
                                            <div className="order-item-details">
                                                <div className="item-name">{item.productName || "Product"}</div>
                                                <div className="item-specs">Qty: {item.quantity}</div>
                                                <div className="item-price">Rs. {item.price}</div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="discount-section">
                                        <input 
                                            type="text" 
                                            placeholder="discount code"
                                            value={discountCode}
                                            onChange={(e) => setDiscountCode(e.target.value)}
                                            className="discount-input"
                                        />
                                        <button 
                                            className="apply-btn"
                                            onClick={handleApplyDiscount}
                                        >
                                            Apply
                                        </button>
                                    </div>

                                    <div className="order-totals">
                                        <div className="total-line">
                                            <span>Subtotal</span>
                                            <span>Rs. {selectedOrder?.totalAmount || 0}</span>
                                        </div>
                                        <div className="total-line">
                                            <span>Shipping</span>
                                            <span>Rs. 0.00</span>
                                        </div>
                                        <div className="total-line">
                                            <span>Estimated tax</span>
                                            <span>Rs. 0.00</span>
                                        </div>
                                        <div className="total-line grand-total">
                                            <span>Grand Total</span>
                                            <span>Rs. {selectedOrder?.totalAmount || 0}</span>
                                        </div>
                                    </div>

                                    <button 
                                        className="continue-payment-btn"
                                        onClick={handleContinuePayment}
                                    >
                                        Continue to pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default OrdersContent;