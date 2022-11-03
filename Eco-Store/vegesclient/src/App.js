import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//pages
import Itemlist from './components/Itemlist';
// import Home from './components/Pages/Home.js';
import About from './components/Pages/About.js';
import Contact from './components/Pages/Contact.js';
import Error from './components/Pages/Error.js';
import Itemdetails from './components/Pages/Itemdetails.js';
import Footer from './components/footer';
import Header from './components/header';
import Cart from './components/Pages/Cart';

//screens
import LoginScreen from './components/Pages/LoginScreen';
import RegisterScreen from './components/Pages/RegisterScreen.js';
import PaymentScreen from './components/Pages/PaymentScreen';
import ShippingScreen from './components/Pages/ShippingScreen';
import PlaceOrderScreen from './components/Pages/PlaceOrderScreen';
import OrderScreen1 from './components/Pages/OrderScreen1';
import ProfileScreen from './components/Pages/ProfileScreen';
import OrderHistory from './components/Pages/OrderHistory';
import CommingSoon from './components/CommingSoon';
import EditProfile from './components/Pages/EditProfile';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" limit={1} />
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Itemlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<Itemdetails />} />
          <Route path="/signin" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/order/:id" element={<OrderScreen1 />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/creator" element={<CommingSoon />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
