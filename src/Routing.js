import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './one/Home'
import Category from './one/Category'
import Product from './one/Product'
import Cart from './one/Cart'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/:category' element={<Category />}/>
                <Route path='/:category/:product' element={<Product />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
    )
}

export default App