import { Link } from 'react-router-dom' 
import './Home.css';
import { importAll } from '../helpers'

function Home() {
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  return (
    <body className='d-flex flex-column align-items-center'>
        <div class='d-flex'>
          <Link to='/' className='display-1 m-4 text-decoration-none text-dark'>Webshop</Link>
          <Link to='/cart' class='d-table m-auto ms-4'>
            <img src={images['cart.png']} class='cartIcon p-1' />
          </Link>
        </div>
        <div className='container h-75'>
          <div class="row mb-4">
            <div class="col">
              <Link to='/herr'>
                <img src={images["herr.jpg"]} class='w-100 shadow rounded'/>
                <h1 class='carousel-caption bg-secondary bg-opacity-75 text-dark img-big'>Herr</h1>
              </Link>
            </div>
            <div class='col'>
              <Link to='/category'>
                <img src={images["dam.jpg"]} class='w-100 shadow rounded'/>
                <h1 class='carousel-caption bg-secondary bg-opacity-75 text-dark img-big'>Dam</h1>
              </Link>
            </div>
          </div>
          <div class='row align-items-center'>
            <div class="col">
              <Link to='/category'>
                <img src={images["barn.jpg"]} class='w-100 shadow rounded'/>
                <h1 class='carousel-caption bg-secondary bg-opacity-75 text-dark img-small'>Barn</h1>
              </Link>
            </div>
            <div class='col'>
              <Link to='/category'>
                <img src={images["baby.jpg"]} class='w-100 shadow rounded'/>
                <h1 class='carousel-caption bg-secondary bg-opacity-75 text-dark img-small'>Baby</h1>
              </Link>
            </div>
            <div class='col'>
              <Link to='/category'>
                <img src={images["budget.jpg"]} class='w-100 shadow rounded'/>
                <h1 class='carousel-caption bg-secondary bg-opacity-75 text-dark img-small'>Budget</h1>
              </Link>
            </div>
          </div>
        </div>
    </body>
  );
}

export default Home;
