import React, { useState } from 'react';
import { User, CreditCard, ShoppingBag, Heart, Tag, Shield, Bell, MessageCircle, LogOut, Edit2, Eye, EyeOff } from 'lucide-react';

export default function UserProfilePage() {
    const [activeSection, setActiveSection] = useState('Personal Data');

    const sidebarItems = [
        { icon: User, label: 'Personal Data' },
        { icon: CreditCard, label: 'Payment & Installments' },
        { icon: ShoppingBag, label: 'Orders' },
        { icon: Heart, label: 'Wish list' },
        { icon: Tag, label: 'Discounts' },
        { icon: Shield, label: 'Security & access' },
        { icon: Bell, label: 'Notification' },
        { icon: MessageCircle, label: 'Contact us' },
        { icon: LogOut, label: 'Log out', isLogout: true }
    ];

    const handleSidebarClick = (label) => {
        if (label === 'Log out') {
            alert('Logging out...');
            return;
        }
        setActiveSection(label);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'Personal Data':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Identification</h2>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>Verify your identity</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '500' }}>
                                    Full name
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        value="Jimmy Smith"
                                        style={{
                                            width: '100%',
                                            padding: '12px 40px 12px 12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                    <Edit2
                                        size={16}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#4285f4',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '500' }}>
                                    E-mail Address
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="email"
                                        value="Jimmy.smith900@gmail.com"
                                        style={{
                                            width: '100%',
                                            padding: '12px 40px 12px 12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                    <Edit2
                                        size={16}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#4285f4',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '500' }}>
                                    Phone number
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="tel"
                                        value="+1234567890"
                                        style={{
                                            width: '100%',
                                            padding: '12px 40px 12px 12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                    <Edit2
                                        size={16}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#4285f4',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '500' }}>
                                    Password
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="password"
                                        value="••••••••"
                                        style={{
                                            width: '100%',
                                            padding: '12px 40px 12px 12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                    <Edit2
                                        size={16}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#4285f4',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '500' }}>
                                    Address
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        value="HubSpot, 25 First Street, Cambridge"
                                        style={{
                                            width: '100%',
                                            padding: '12px 40px 12px 12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                    <Edit2
                                        size={16}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#4285f4',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '500' }}>
                                    Postal code
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="Enter postal code"
                                        style={{
                                            width: '100%',
                                            padding: '12px 40px 12px 12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                    <Edit2
                                        size={16}
                                        style={{
                                            position: 'absolute',
                                            right: '12px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#4285f4',
                                            cursor: 'pointer'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'Payment & Installments':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Cards</h2>
                        <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                                <input
                                    type="text"
                                    placeholder="Enter postal code"
                                    style={{
                                        width: '50%',
                                        padding: '12px 40px 12px 12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        outline: 'none',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter postal code"
                                    style={{
                                        width: '50%',
                                        padding: '12px 40px 12px 12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        outline: 'none',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                <button style={{
                                    backgroundColor: '#4285f4',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '6px',
                                    marginTop: '16px',
                                    cursor: 'pointer'
                                }}>
                                    Add Payment Method
                                </button>
                            </div>

                        </div>
                    </div>
                );
            case 'Orders':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Order History</h2>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>Track and manage your orders</p>
                        <div style={{
                            display: 'flex',
                            gap: '32px',
                            marginBottom: '24px',
                            borderBottom: '1px solid #e0e0e0',
                            paddingBottom: '16px'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '20px', fontWeight: '600', color: '#4285f4', margin: '0' }}>0</p>
                                <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0 0' }}>Current</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '20px', fontWeight: '600', color: '#28a745', margin: '0' }}>0</p>
                                <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0 0' }}>Delivered</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '20px', fontWeight: '600', color: '#dc3545', margin: '0' }}>0</p>
                                <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0 0' }}>Canceled</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '20px', fontWeight: '600', color: '#ffc107', margin: '0' }}>0</p>
                                <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0 0' }}>Returned</p>
                            </div>
                        </div>

                        {/* Sample Orders */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Order 1 */}
                            <div style={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '20px',
                                backgroundColor: '#fafafa'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <div>
                                        <h3 style={{ color: '#333', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                                            Order #ORD-2024-001
                                        </h3>
                                        <p style={{ color: '#666', margin: '0', fontSize: '14px' }}>
                                            Placed on Dec 15, 2024
                                        </p>
                                    </div>
                                    <span style={{
                                        backgroundColor: '#4285f4',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        Processing
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                                            Items: MacBook Pro, iPhone Case
                                        </p>
                                        <p style={{ margin: '4px 0 0 0', fontSize: '16px', fontWeight: '600', color: '#333' }}>
                                            Total: $1,299.99
                                        </p>
                                    </div>
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        color: '#4285f4',
                                        border: '1px solid #4285f4',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '14px'
                                    }}>
                                        Track Order
                                    </button>
                                </div>
                            </div>

                            {/* Order 2 */}
                            <div style={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '20px',
                                backgroundColor: '#fafafa'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <div>
                                        <h3 style={{ color: '#333', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                                            Order #ORD-2024-002
                                        </h3>
                                        <p style={{ color: '#666', margin: '0', fontSize: '14px' }}>
                                            Placed on Dec 12, 2024
                                        </p>
                                    </div>
                                    <span style={{
                                        backgroundColor: '#28a745',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        Delivered
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                                            Items: Wireless Headphones, Charging Cable
                                        </p>
                                        <p style={{ margin: '4px 0 0 0', fontSize: '16px', fontWeight: '600', color: '#333' }}>
                                            Total: $299.99
                                        </p>
                                    </div>
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        color: '#4285f4',
                                        border: '1px solid #4285f4',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '14px'
                                    }}>
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Order 3 */}
                            <div style={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '20px',
                                backgroundColor: '#fafafa'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <div>
                                        <h3 style={{ color: '#333', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                                            Order #ORD-2024-003
                                        </h3>
                                        <p style={{ color: '#666', margin: '0', fontSize: '14px' }}>
                                            Placed on Dec 10, 2024
                                        </p>
                                    </div>
                                    <span style={{
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '500'
                                    }}>
                                        Canceled
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                                            Items: Smart Watch, Screen Protector
                                        </p>
                                        <p style={{ margin: '4px 0 0 0', fontSize: '16px', fontWeight: '600', color: '#333' }}>
                                            Total: $399.99
                                        </p>
                                    </div>
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        color: '#666',
                                        border: '1px solid #ddd',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '14px'
                                    }}>
                                        Reorder
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button style={{
                            backgroundColor: '#4285f4',
                            color: 'white',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '6px',
                            marginTop: '24px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}>
                            Continue Shopping
                        </button>
                    </div>
                );

            case 'Wish list':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>My Wish List</h2>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>Save items you love for later</p>

                        <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
                            <Heart size={48} style={{ color: '#ccc', marginBottom: '16px' }} />
                            <h3 style={{ color: '#666', marginBottom: '8px' }}>Your Wish List is Empty</h3>
                            <p style={{ color: '#999', fontSize: '14px' }}>Add items to your wish list to save them for later</p>
                            <button style={{
                                backgroundColor: '#4285f4',
                                color: 'white',
                                border: 'none',
                                padding: '12px 24px',
                                borderRadius: '6px',
                                marginTop: '16px',
                                cursor: 'pointer'
                            }}>
                                Browse Products
                            </button>
                        </div>
                    </div>
                );

            case 'Discounts':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Discounts & Coupons</h2>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>View available discounts and promotional codes</p>

                        <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
                            <Tag size={48} style={{ color: '#ccc', marginBottom: '16px' }} />
                            <h3 style={{ color: '#666', marginBottom: '8px' }}>No Active Discounts</h3>
                            <p style={{ color: '#999', fontSize: '14px' }}>Check back later for special offers and promotional codes</p>
                        </div>
                    </div>
                );

            case 'Security & access':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Security & Access</h2>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>Manage your account security settings</p>

                        <div style={{ display: 'grid', gap: '16px' }}>
                            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px' }}>
                                <h3 style={{ color: '#333', marginBottom: '8px' }}>Two-Factor Authentication</h3>
                                <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>Add an extra layer of security to your account</p>
                                <button style={{
                                    backgroundColor: '#4285f4',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    Enable 2FA
                                </button>
                            </div>

                            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px' }}>
                                <h3 style={{ color: '#333', marginBottom: '8px' }}>Login Sessions</h3>
                                <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>Manage your active login sessions</p>
                                <button style={{
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    Sign Out All Devices
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'Notification':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Notifications</h2>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>Manage your notification preferences</p>

                        <div style={{ display: 'grid', gap: '16px' }}>
                            {[
                                { title: 'Email Notifications', desc: 'Receive updates via email' },
                                { title: 'SMS Notifications', desc: 'Get text message alerts' },
                                { title: 'Push Notifications', desc: 'Browser push notifications' },
                                { title: 'Order Updates', desc: 'Updates about your orders' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    padding: '20px'
                                }}>
                                    <div>
                                        <h3 style={{ color: '#333', marginBottom: '4px' }}>{item.title}</h3>
                                        <p style={{ color: '#666', fontSize: '14px' }}>{item.desc}</p>
                                    </div>
                                    <label style={{
                                        position: 'relative',
                                        display: 'inline-block',
                                        width: '50px',
                                        height: '24px'
                                    }}>
                                        <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                                        <span style={{
                                            position: 'absolute',
                                            cursor: 'pointer',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: '#ccc',
                                            borderRadius: '24px',
                                            transition: '0.4s'
                                        }}></span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'Contact us':
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Contact Us</h2>
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '32px' }}>Get in touch with our support team</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
                                <MessageCircle size={48} style={{ color: '#4285f4', marginBottom: '16px' }} />
                                <h3 style={{ color: '#333', marginBottom: '8px' }}>Live Chat</h3>
                                <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>Chat with our support team</p>
                                <button style={{
                                    backgroundColor: '#4285f4',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '6px',
                                    cursor: 'pointer'
                                }}>
                                    Start Chat
                                </button>
                            </div>

                            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
                                <Bell size={48} style={{ color: '#4285f4', marginBottom: '16px' }} />
                                <h3 style={{ color: '#333', marginBottom: '8px' }}>Email Support</h3>
                                <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>Send us an email</p>
                                <button style={{
                                    backgroundColor: '#4285f4',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '6px',
                                    cursor: 'pointer'
                                }}>
                                    Send Email
                                </button>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Section Not Found</h2>
                        <p style={{ color: '#666', fontSize: '14px' }}>The requested section could not be found.</p>
                    </div>
                );
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ display: 'flex', maxWidth: '1200px', padding: '16px 24px', margin: "auto" }}>
                <div style={{ color: '#666', fontSize: '14px' }}>
                    <span>Home</span>
                    <span style={{ margin: '0 8px' }}>›</span>
                    <span>Account</span>
                    <span style={{ margin: '0 8px' }}>›</span>
                    <span style={{ color: '#4285f4' }}>{activeSection}</span>
                </div>
            </div>

            <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
                <div style={{ width: '280px', marginRight: '24px' }}>
                    <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', marginBottom: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                                <User color="#666" size={24} />
                            </div>
                            <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>Jimmy smith</span>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        {sidebarItems.map((item, index) => {
                            const IconComponent = item.icon;
                            const isActive = activeSection === item.label;
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleSidebarClick(item.label)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '16px 20px',
                                        borderBottom: index < sidebarItems.length - 1 ? '1px solid #f0f0f0' : 'none',
                                        backgroundColor: isActive ? '#f0f7ff' : 'white',
                                        borderLeft: isActive ? '4px solid #4285f4' : '4px solid transparent',
                                        cursor: 'pointer',
                                        color: item.isLogout ? '#dc3545' : (isActive ? '#4285f4' : '#666'),
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive && !item.isLogout) {
                                            e.target.style.backgroundColor = '#f8f9fa';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.target.style.backgroundColor = 'white';
                                        }
                                    }}
                                >
                                    <IconComponent size={20} style={{ marginRight: '12px' }} />
                                    <span style={{ fontSize: '14px', fontWeight: isActive ? '500' : '400' }}>
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '8px', padding: '32px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}