import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from '../Layout/sideBar'
import DashboardScreen from '../Screens/DashboardScreen';
import ProductScreen from '../Screens/ProductScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import TransactionScreen from '../Screens/TransactionScreen';
import UsersScreen from '../Screens/UsersScreen';
import AddProduct from '../Screens/AddProduct';

export default function Navigation() {
  return (
    <div>
      <Router>
      <SideBar>
          <Routes>
            <Route path="/side" element={<SideBar/>} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/product" element={<ProductScreen />} />
            <Route path="/category" element={<CategoryScreen />} />
            <Route path="/orders" element={<OrdersScreen />} />
            <Route path="/transaction" element={<TransactionScreen />} />
            <Route path="/users" element={<UsersScreen />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </SideBar> 
      </Router>
    </div>
  )
}
