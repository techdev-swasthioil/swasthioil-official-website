import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/home"
import Products from "./pages/products"
import About from "./pages/about"
import Contact from "./pages/contact"
import Main from "./layouts/Main"
import Oil1LB from "./pages/swasthi-1L-bottle"
import Oil05LB from "./pages/swasthi-0.5L-bottle"
import Oil05LP from "./pages/swasthi-0.5L-pouch"
import Oil1LP from "./pages/swasthi-1L-pouch"
import Oil5LC from "./pages/swasthi-5L-can"
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
            </Routes>
        </>
    )
}
export default AppRoutes;