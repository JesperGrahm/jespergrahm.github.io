import { Link } from "react-router-dom";

function Start() {
    return (
        <div className='w-100 text-center'>
            <Link to='/one/' className='display-1 text-decoration-none m-4'>Bra</Link>
            <Link to='/two/' className='display-1 text-decoration-none m-4'>Dålig</Link>
        </div>
    )
}

export default Start;