import {
  User,
  CreditCard,
  ShoppingBag,
  Heart,
  Tag,
  Shield,
  Bell,
  MessageCircle,
  LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import "../Pages/sidebar.css"
export default function UserProfilePage() {
  const sidebarItems = [
    { icon: User, label: 'Personal Data', path: '/profile/PersonalData' },
    { icon: CreditCard, label: 'Payment & Installments', path: '/profile/userprofulepage' },
    { icon: ShoppingBag, label: 'Orders', path: '/profile/orderhistory' },
    { icon: Heart, label: 'Wish list', path: '/profile/wishlist' },
    { icon: Tag, label: 'Discounts', path: '/profile/discounts' },
    { icon: Shield, label: 'Security & access', path: '/profile/security' },
    { icon: Bell, label: 'Notification', path: '/profile/notifications' },
    { icon: MessageCircle, label: 'Contact us', path: '/profile/contact' },
    { icon: LogOut, label: 'Log out', path: '/logout', isLogout: true }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', maxWidth: '1200px', padding: '16px 24px', margin: 'auto' }}>
        <div style={{ color: '#666', fontSize: '14px' }}>
          <span>Home</span>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>Account</span>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#4285f4' }}>Personal Data</span>
        </div>
      </div>
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <div className="sidebar-container">
          {sidebarItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              <item.icon size={20} style={{ marginRight: '10px' }} />
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="profile-content">
          <h2>Welcome to your profile!</h2>
          <p>Select an option from the sidebar to manage your account.</p>
        </div>
      </div>
    </div>
  );
}
