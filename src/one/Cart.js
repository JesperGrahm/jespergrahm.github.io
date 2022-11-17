import { Link } from 'react-router-dom';
import { importAll } from '../helpers';
import './Cart.css';
import { Button } from 'react-bootstrap';

function Cart() {

    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    var cart = JSON.parse(localStorage.getItem('cart'));

    function removeItem(name, size) {
        var cart = JSON.parse(localStorage.getItem('cart'))
        for(let i = 0; i < cart.length; i++) {
            let item = cart[i];
            if (item.data.name == name && item.size == size) {
              cart.splice(i, 1)
              break;
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('Removed item from cart ')
        window.location.reload()
    }

    function clearCart() {
        localStorage.setItem('cart', JSON.stringify([]))
        console.log("Cart cleared.")
        window.location.reload()
    }

    return (
        <body className='d-flex flex-column align-items-center'>
            <div className='d-flex'>
                <Link to='/' className='display-1 m-4 text-decoration-none text-dark'>Webshop</Link>
                <Link to='/cart' class='d-table m-auto ms-4'>
                    <img src={images['cart.png']} className='cartIcon p-1' />
                </Link>
            </div>
            <div className='cartItemsContainer'>
                {cart.length != 0 ?
                    cart.map(item => (
                        <div className='item d-flex mb-4 shadow'>
                            <img src={images[item.data.img_path]} className='itemImg' />
                            <div className='ms-auto pe-4'>
                                <p className='m-1 fw-bold'>Produkt: {item.data.name}</p>
                                <p className='m-1 fw-bold'>Storlek: {item.size}</p>
                                <p className='m-1 fw-bold'>Antal: {item.amount}</p>
                                <p className='m-1 fw-bold'>Totalt pris: {parseInt(item.amount)*parseInt(item.data.price)} kr</p>
                            </div>
                            <Button className='removeItem btn-danger m-auto' 
                                    onClick={() => removeItem(item.data.name, item.size)}>
                                    Ta bort produkt
                            </Button>
                        </div>
                ))
                : <h1 className='text-center'>Varukorgen är tom</h1>}
            </div>
            {cart.length != 0 &&
                <div className='d-flex'>
                    <Button size='lg' className='me-4 p-3' onClick={clearCart}>Köp</Button>
                    <Button size='lg' className='ms-4 btn-danger' onClick={clearCart}>Töm varukorgen</Button>
                </div>
            }
        </body>
    );
}

export default Cart;