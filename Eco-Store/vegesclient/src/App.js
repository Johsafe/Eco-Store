
import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';


//pages
import Itemlist from './components/Itemlist';
import Home from './components/Pages/Home.js'
import About from './components/Pages/About.js'
import Contact from './components/Pages/Contact.js'
import Error from './components/Pages/Error.js'
import Itemdetails from './components/Pages/Itemdetails.js'
import Footer from './components/footer';
import Header from './components/header';
import Cart from './components/Pages/Cart';
import Register from './components/Pages/Register';
import Signin from './components/Pages/Signin';


function App() {
  
  return (
    <div className="App">

     <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/> }  />
        <Route path="/about" element={<About/> }  />
        <Route path="/contact" element={<Contact/> }  />
        <Route path="/shop" element={<Itemlist/> }  />
        <Route path="/cart" element={<Cart/> }  />
        <Route path="/product/:slug" element={<Itemdetails/>} />
        <Route path="/signin" element={<Signin/> }  />
        <Route path="*" element={<Error/> }  />
      </Routes>
      <Footer/>
     </Router>
     
    </div>
  );
}

export default App;
