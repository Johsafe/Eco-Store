import { Add, Delete, Remove} from "@mui/icons-material";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import classes from '../css/Cart.module.css'
import EmptyCart from "./EmptyCart";



export default  function Cart() {

    const navigate = useNavigate();

    const {state, dispatch:ctxDispatch} = useContext(Store);
    const {
        cart : { cartItems },
    } = state;

const  updateCartHandler = async (item, quantity) =>{
  const  response= await fetch(`http://localhost:5000/api/products/${item._id}`);
  const  data = await response.json();
  console.table(data);

  if (data.inStock < quantity ){
    window.alert('Sorry!! ,Product is out of stock');
    return;
  }
  
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item ,quantity },

    });
    }
    const removeItemhandler =(item) =>{
        ctxDispatch({ type: 'CART_REMOVE_ITEM' ,payload: item});
    }

    const checkoutHandler =() => {
        navigate('/signin?redirect=/shipping')

    }

    return(
        <div>
            <Helmet>
            <title>Shopping Cart</title>
            </Helmet>
                  
            
            <div className={classes.header}>
               <h1>Our Shopping Cart</h1>
            </div>
            <div className={classes.shopping}>
                {cartItems.length === 0 ? (
                    <div>
                        <EmptyCart/>
                    </div>
                ):(
                   
         <div className={classes.cart}>
         <b>Cart ({ cartItems.reduce((a,c )=> a + c.quantity ,0)} {' '}   items) </b>
                                
        <table   className='table  table-striped'>
            <tbody>
        {cartItems.map((item) => (
         
          <tr key={item._id}> 
          <td>
          <img src={item.image} alt={item.name}  />
         </td>
         <td ><Link to={`/product/${item.slug}`}>{item.name}</Link></td> 
         <td >Ksh. {item.price * item.quantity}</td>
         <td >Quantity ({item.quantity})</td>
         <td>
           <div className={classes.cart1Button}>   
        <button
        onClick={()=> updateCartHandler(item ,item.quantity - 1)}
         disable={item.quantity === 1}>
            <Remove/>  </button>

        <span>{item.quantity}</span> 
         <button 
         onClick={()=> updateCartHandler(item ,item.quantity + 1)}
         disable={item.quantity === item.inStock}>
            <Add/>     </button>
            
        <button 
        onClick={()=> removeItemhandler(item)}
        className='btn-sm btn-danger'>
            <Delete/>  </button>
         
            </div>
            </td>
          </tr>

        ))}
         
          </tbody>
          </table>
          <div>
             <div className={classes.cartPrice}>
                <h4>
                    Subtotal
                    {'  '}
                    ksh. { cartItems.reduce((a,c) => a + c.price * c.quantity ,0)}
                </h4>
             </div>
             <div className={classes.cartButton}>
             <Link to='/shop'><button >
                        Continue Shopping
                    </button></Link> 
                    <button
                    onClick={ checkoutHandler}
                     disable={ cartItems.length ===0} >
                        Proceed to Checkout
                    </button>
            </div>
        </div>

      </div>
      
     )}     
         </div>
        </div>
           
    )
}