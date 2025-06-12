import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Pages/Nevbar/Navbar';
import Blog from './Components/Pages/blog/blog';
import Contact from './Components/Pages/contact/Contact';
import User from './Components/Pages/user/user';
import FAQ from './Components/Pages/Faq/Faq';
import ProductTop from './Components/Pages/Product/product';
import SignupForm from './Components/Pages/SignUP/signup';
import Home from './Components/Pages/home/home';
import BestSellerProduct from "./Components/HomePagecomponents/NewProduct/Newproduct";
import { SiNewjapanprowrestling } from 'react-icons/si';
import Topbrands from './Components/HomePagecomponents/TopBrands/Topbrands';
import Orders from './Components/Pages/Orders';
import SmartWatch from './Components/HomePagecomponents/SmartWatch/smartwatch';
import OurBlogs from './Components/HomePagecomponents/OurBlog/OurBlog';
import FeatureIcons from './Components/HomePagecomponents/Feature/Fearure';
import Footer from './Components/HomePagecomponents/Footer/Footer';
import Singleproduct from './Components/Pages/Singleproduct/singleproduct';
import Multiproduct from './Components/Pages/MultiProduct/Multiproduct';
import Bag from './Components/Pages/Bag/bage';
import PhoneCaseCatalog from './Components/Pages/Search/search';
import Checkout from './Components/Pages/CheckOut/checkout';
import UserProfilePage from './Components/Pages/UserData/personaldata';
import OrdersContent from './Components/Pages/OrdersContent';
import WishlistCards from './Components/Pages/WishList/WishlistCards';
import PaymentContent from './Components/Pages/PaymentContent';
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/OrdersContent" element={<OrdersContent />} />
                <Route path="/WishlistCards" element={<WishlistCards />} />
                <Route path="/Payment" element={<PaymentContent />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/product" element={<ProductTop />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search" element={<PhoneCaseCatalog />} />
                <Route path="/bag" element={<Bag />} />
                <Route path="/Multiproduct" element={<Multiproduct />} />
                <Route path="/bestseller" element={<BestSellerProduct />} />
                <Route path="/Topbrands" element={<Topbrands />} />
                <Route path="/" element={<Home />} />
                <Route path="/ourblogs" element={<OurBlogs />} />
                <Route path="/FeatureIcons" element={<FeatureIcons />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/Singleproduct" element={<Singleproduct />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/personaldata" element={<UserProfilePage />} />
                 <Route path="/SmartWatch " element={<SmartWatch  />} />
            </Routes>
        </div>
    );
}

export default App;


