import { showToast } from "../Pages/Toast";
import { useNavigate } from "react-router-dom"; 
import "../../CSS/LogoutModel.css";

const LogoutModel = ({ onLogout, onClose }) => {
    const navigate = useNavigate(); 

    const handleLogoutConfirm = () => {
        localStorage.removeItem("token");
        showToast("Logout Successful", "green");

        onLogout();
        onClose();  
       navigate("/SignUp");
    }

    return (
        <div className="logout-overlay">
            <div className="logout-modal">
                <p>Are you sure you want to logout?</p>
                <div className="logout-buttons">
                    <button className="logout-confirm" onClick={handleLogoutConfirm}>
                        Yes, Logout
                    </button>
                    <button className="logout-cancel" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModel;
