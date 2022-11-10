import {useLocation, useParams, Link} from 'react-router-dom';
import { categories } from '../database'
import './Product.css'
import CategoryNavbar from '../CategoryNavbar.js'
import { getProductsInCategory, importAll, getProduct } from '../helpers'

function Product() {
  const location = useLocation();
  const { product } = useParams();
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  const productData = getProduct(product)

  return (
    <body className='d-flex flex-column align-items-center'>
        <h1 className='display-1 p-4'>Applikation</h1>
        <div className='container h-75 d-flex'>
            <CategoryNavbar data={categories} />
            <div class='productContainer d-flex'>
                <img src={images[productData.img_path]} class='shadow'/>
                <h1 class='ps-4 h-25 bg-primary'>{productData.name}</h1>
                <p>Hej här är lite text lorem ipsum plingplong dingdong.</p>
            </div>
        </div>
    </body>
  );
}

export default Product;