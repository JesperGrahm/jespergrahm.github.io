import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './one/Home'
import Category from './one/Category'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/:categoryName' element={<Category />}/>
            </Routes>
        </Router>
    )
}

export default App