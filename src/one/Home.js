import '../Home.css';
import Navbar from '../Navbar'
import { getSubdomain } from '../helpers'

function Home() {
  return (
    <body className='d-flex flex-column align-items-center'>
        <h1 className='display-1 p-4'>Applikation</h1>
        <div className='container d-flex h-75'>
          <Navbar />
        </div>
    </body>
  );
}

export default Home;
