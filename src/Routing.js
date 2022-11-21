import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from './Start'
import { Home as HomeOne } from './one/Home'
import { Category as CategoryOne } from './one/Category'
import { Product as ProductOne } from './one/Product'
import { Cart as CartOne } from './one/Cart'
import { Home as HomeTwo } from './two/Home'
import { Category as CategoryTwo } from './two/Category'
import { Product1 as ProductTwoOne } from './two/Product1'
import { Product2 as ProductTwoTwo } from './two/Product2'
import { Product3 as ProductTwoThree } from './two/Product3'
import { Product4 as ProductTwoFour } from './two/Product4'
import { Product5 as ProductTwoFive } from './two/Product5'
import { Product6 as ProductTwoSix } from './two/Product6'
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
                <Route path='/two/:category/1/:product' element={<ProductTwoOne />}/>
                <Route path='/two/:category/2/:product' element={<ProductTwoTwo />}/>
                <Route path='/two/:category/3/:product' element={<ProductTwoThree />}/>
                <Route path='/two/:category/4/:product' element={<ProductTwoFour />}/>
                <Route path='/two/:category/5/:product' element={<ProductTwoFive />}/>
                <Route path='/two/:category/6/:product' element={<ProductTwoSix />}/>
                <Route path='/two/cart' element={<CartTwo />}/>
            </Routes>
        </Router>
    )
}

export default App