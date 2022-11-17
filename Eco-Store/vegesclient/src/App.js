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
//admin
import Signin from './Admin/Pages/Signin';
import Navigation from './Admin/utils/Navigation';
import Dashnav from './Admin/utils/Dashnav';
import DashboardScreen from './Admin/Screens/DashboardScreen';
import ProductScreen from './Admin/Screens/ProductScreen';
import CategoryScreen from './Admin/Screens/CategoryScreen';
import OrdersScreen from './Admin/Screens/OrdersScreen';
import UsersScreen from './Admin/Screens/UsersScreen';
import TransactionScreen from './Admin/Screens/TransactionScreen';
import AddProduct from './Admin/Screens/AddProduct';
import EditProduct from './Admin/Screens/EditProduct';
import OrderDetails from './Admin/Screens/OrderDetails';


function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" limit={1} />
      <Router>
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
          <Route path="/admin" element={<Signin />} />
          <Route path="/navigation" element={<Dashnav />} />
          <Route path="/navigation/dashboard" element={<DashboardScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/category" element={<CategoryScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/transaction" element={<TransactionScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/updateorder/:id" element={<OrderDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
