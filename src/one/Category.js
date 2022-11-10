import {useLocation, useParams, Link} from 'react-router-dom';
import { categories, products } from '../database'
import './Category.css'
import CategoryNavbar from '../CategoryNavbar.js'
import { getProductsInCategory, importAll } from '../helpers'

function Category() {
  const location = useLocation();
  const { categoryName } = useParams();
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  return (
    <body className='d-flex flex-column align-items-center'>
        <h1 className='display-1 p-4'>Applikation</h1>
        <div className='container h-75 d-flex'>
            <CategoryNavbar data={categories} />
            <div class='productContainer d-flex'>
                {getProductsInCategory('herr').map(product => (
                    <div class='product'>
                        <Link to={'/' + product.category + '/' + product.id}>
                            <img src={images[product.img_path]} class='shadow'/>
                        </Link>
                        <h5 class='pt-3'>{product.name}: {product.price} kr</h5> 
                    </div>
                ))}
            </div>
        </div>
    </body>
  );
}

export default Category;