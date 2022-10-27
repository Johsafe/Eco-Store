import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import ShippingScreen from './components/Pages/ShippingScreen';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import LoginScreen from './components/Pages/LoginScreen';
import RegisterScreen from './components/Pages/RegisterScreen.js';
import PaymentScreen from './components/Pages/PaymentScreen';
import PlaceOrderScreen from './components/Pages/PlaceOrderScreen';
import OrderScreen from './components/Pages/OrderScreen';
import OrderScreen1 from './components/Pages/OrderScreen1';





function App() {
  return (

    <div className="App">
      <ToastContainer position="bottom-center" limit={1}/>
      <Router>
      
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Itemlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<Itemdetails />} />
          <Route path="/signin" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={< PlaceOrderScreen/>} />
          <Route path="/order/:id" element={< OrderScreen1/>} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
