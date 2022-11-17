import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from './Start'
import { Home as HomeOne } from './one/Home'
import { Category as CategoryOne } from './one/Category'
import { Product as ProductOne } from './one/Product'
import { Cart as CartOne } from './one/Cart'
import { Home as HomeTwo } from './two/Home'
import { Category as CategoryTwo } from './two/Category'
import { Product as ProductTwo } from './two/Product'
import { Cart as CartTwo } from './two/Cart'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Start />}/>
                <Route path='/one' element={<HomeOne />}/>
                <Route path='/one/:category' element={<CategoryOne />}/>
                <Route path='/one/:category/:product' element={<ProductOne />}/>
                <Route path='/one/cart' element={<CartOne />}/>
                <Route path='/two' element={<HomeTwo />}/>
                <Route path='/two/:category' element={<CategoryTwo />}/>
                <Route path='/two/:category/:product' element={<ProductTwo />}/>
                <Route path='/two/cart' element={<CartTwo />}/>
            </Routes>
        </Router>
    )
}

export default App