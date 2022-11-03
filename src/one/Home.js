import { Link } from 'react-router-dom' 
import '../Home.css';
import Navbar from '../Navbar'
import { getSubdomain } from '../helpers'
import herr from '../images/herr.jpg'
import dam from '../images/dam.jpg'

function Home() {
  return (
    <body className='d-flex flex-column align-items-center'>
        <h1 className='display-1 p-4'>Applikation</h1>
        <div className='container d-flex h-75'>
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
