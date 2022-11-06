import {useLocation, useParams} from 'react-router-dom';
import database from '../database.json'
import './Category.css'
import CategoryNavbar from '../CategoryNavbar.js'

function Category() {
  const location = useLocation();
  const { categoryName } = useParams();

  return (
    <body className='d-flex flex-column align-items-center'>
        <h1 className='display-1 p-4'>Applikation</h1>
        <div className='container h-75'>
            <CategoryNavbar data={database.categories} />
        </div>
    </body>
  );
}

export default Category;