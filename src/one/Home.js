import { Link, useNavigate } from 'react-router-dom' 
import './Home.css';
import { importAll } from '../helpers'

//Länkar borde gå till item/3 där item hämtar data från json fil och visar för det itemet
//Måste spara skit i en varukorg med, får kolla på cookies

function Home() {
  const navigate = useNavigate();
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  const toItems=(category)=>{
    navigate('/category',{state:{category:category, name:'sabaoon'}});
  }

  return (
    <body className='d-flex flex-column align-items-center'>
        <h1 className='display-1 p-4'>Applikation</h1>
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
