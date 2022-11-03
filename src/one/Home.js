import '../Home.css';
import Navbar from '../Navbar'
import { getSubdomain } from '../helpers'
import herr from '../images/herr'
import dam from '../images/dam'

function Home() {
  return (
    <body className='d-flex flex-column align-items-center'>
        <h1 className='display-1 p-4'>Applikation</h1>
        <div className='container d-flex h-75'>
        <p>PLONGA BONGA</p>
        <Link to='/item'>
            <img src={herr} class='img-thumbnail w-50'/>
          </Link>
          <Link to='/item'>
            <img src={dam} class='img-thumbnail w-50'/>
          </Link>
        </div>
    </body>
  );
}

export default Home;
