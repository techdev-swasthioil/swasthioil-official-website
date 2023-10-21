import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/home"
import Products from "./pages/products"
import About from "./pages/about"
import Contact from "./pages/contact"
import Main from "./layouts/Main"
const AppRoutes = (props) => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Main/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/> 
                    <Route path="products" element={<Products/>}/>
                    {/* <Route path="organize-a-camp" element={<Organize_camp/>}/>
                    <Route path="join-us" element={<Join/>}/> */}
                    <Route path='' element={<Navigate to ='/home'/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes;