import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home'
import Item from './pages/Item'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/item' element={<Item />}/>
            </Routes>
        </Router>
    )
}

export default App