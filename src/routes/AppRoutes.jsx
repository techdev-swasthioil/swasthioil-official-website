import { Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/web-pages/home"
import Products from "../pages/web-pages/products"
import About from "../pages/web-pages/about"
import Contact from "../pages/web-pages/contact"
import Main from "../layouts/Main"
import Oil1LB from "../pages/web-pages/swasthi-1L-bottle"
import Oil05LB from "../pages/web-pages/swasthi-0.5L-bottle"
import Oil05LP from "../pages/web-pages/swasthi-0.5L-pouch"
import Oil1LP from "../pages/web-pages/swasthi-1L-pouch"
import Oil5LC from "../pages/web-pages/swasthi-5L-can"
import Login from "../pages/web-pages/login.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import Dashboard from "../pages/management/dashboard.jsx";
import ProductManagement from "../pages/management/productManagement.jsx";
import Customers from "../pages/management/customers.jsx";
import Orders from "../pages/management/orders.jsx";
import Staffs from "../pages/management/staffs.jsx";
import Inventory from "../pages/management/inventory.jsx";
import CashFlow from "../pages/management/cashflow.jsx";
import Billing from "../pages/management/billing.jsx";
import Expenses from "../pages/management/expenses.jsx"

const AppRoutes = (props) => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Main/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/> 
                    <Route path="products" element={<Products/>}/>
                    <Route path="swasthi-1L-bottle" element={<Oil1LB/>}/>
                    <Route path="swasthi-0.5L-bottle" element={<Oil05LB/>}/>
                    <Route path="swasthi-1L-pouch" element={<Oil1LP/>}/>
                    <Route path="swasthi-0.5L-pouch" element={<Oil05LP/>}/>
                    <Route path="swasthi-5L-can" element={<Oil5LC/>}/>
                    <Route path='' element={<Navigate to ='/home'/>}/>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={
                    <PrivateRoute>
                        <DashboardLayout />
                    </PrivateRoute>
                }>
                    <Route path='' element={<Navigate to="/admin/dashboard" />} />
                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path="productManagement" element={<ProductManagement/>}/>
                    <Route path="customers" element={<Customers/>}/>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="staffs" element={<Staffs/>}/>
                    <Route path="inventory" element={<Inventory/>}/>
                    <Route path="billing" element={<Billing/>}/>
                    <Route path="cashflow" element={<CashFlow/>}/>
                    <Route path="expenses" element={<Expenses/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes;