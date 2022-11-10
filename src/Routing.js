import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './one/Home'
import Category from './one/Category'
import Product from './one/Product'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/:category' element={<Category />}/>
                <Route path='/:category/:product' element={<Product />}/>
            </Routes>
        </Router>
    )
}

export default App