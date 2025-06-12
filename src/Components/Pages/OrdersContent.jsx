import React, { useEffect, useState } from 'react';
import "../../CSS/OrdersContent.css";

const OrdersContent = () => {
    const token = localStorage.getItem("token");
    const [orders, setOrders] = useState([]);
    
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
    
    return (
        <>
            <div className="orders-container">
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
            </div>
        </>
    )
}

export default OrdersContent;