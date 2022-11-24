import { useParams, Link } from 'react-router-dom';
import { useState } from 'react'
import { categories } from '../database'
import './Product.css'
import CategoryNavbar from '../CategoryNavbar.js'
import { importAll, getProduct } from '../helpers'
import { Button, Form } from 'react-bootstrap';

function Product() {
  const [ isAlertVisible, setIsAlertVisible ] = useState(false);
  const { product } = useParams();
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  const productData = getProduct(product);
  var size = '';
  var amount = 0;
  var color = '';
  function setSize(value) {
    size = value;
    console.log("size: "+value)
  };
  function setAmount(value) {
    amount = parseInt(value);
    console.log("amount: "+value)
  };
  function setColor(value) {
    color = value;
    console.log("color: "+value)
  };
  function addToCart() {
    if (size != '' && amount != 0 && color != '') {
      var cart = JSON.parse(localStorage.getItem('cart'))
      if (cart === null) {
        localStorage.setItem('cart', JSON.stringify([]))
        cart = JSON.parse(localStorage.getItem('cart'))
      }
      var itemToBeAdded = {"data": productData, "size": size, "amount": amount, "color": color}
      var itemAdded = false;
      for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        if (item.data.name == productData.name && item.size == size && item.color == color) {
          item.amount = item.amount + amount;
          itemAdded = true;
          break;
        }
      }
      if (!itemAdded) {
        cart.push(itemToBeAdded)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      setIsAlertVisible(true);
      setTimeout(() => { setIsAlertVisible(false); }, 2000);
      console.log('added to cart '+localStorage.getItem('cart'))
    } else {
      console.log("Size and/or amount and/or color not set. Item not added to cart.")
    }
  };

  return (
    <body className='d-flex flex-column align-items-center'>
        <div class='d-flex'>
          <Link to='/one' className='display-1 m-4 text-decoration-none text-dark'>Webshop</Link>
          <Link to='/one/cart' class='d-table m-auto ms-4'>
            <img src={images['cart.png']} class='cartIcon p-1' />
          </Link>
        </div>
        <div className='container h-75 d-flex'>
            <CategoryNavbar data={categories} />
            <div class='w-100 d-flex'>
                <img src={images[productData.img_path]} class='shadow productImg ms-4'/>
                <div class='productInformation w-50 ps-4'>
                  <h1 class='productTitle pb-4'>{productData.name}</h1>
                  <p class=''>{productData.info}</p>
                  <div class='w-75 d-flex'>
                  <Form.Select onChange={choice => {setSize(choice.target.value);}}>
                    <option hidden>Storlek</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </ Form.Select>
                  <span class='p-2'></span>
                  <Form.Select onChange={choice => {setColor(choice.target.value);}}>
                    <option hidden>Färg</option>
                    <option value="Vit">Vit</option>
                    <option value="Svart">Svart</option>
                    <option value="Blå">Blå</option>
                    <option value="Grön">Grön</option>
                    <option value="Röd">Röd</option>
                  </ Form.Select>
                  <span class='p-2'></span>
                  </div>
                  <div class='d-flex mt-4 pt-4'>
                    <div class='w-25 pe-4'>
                      <Form.Select onChange={choice => {setAmount(choice.target.value);}}>
                        <option hidden>Antal</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </ Form.Select>
                    </div>
                    <Button size='lg' onClick={addToCart}>Lägg i varukorg</Button>
                    {isAlertVisible && <p className='ms-1 fw-bold h-25'>Produkt tillagd i varukorgen</p>}
                  </div>
                </div>
            </div>
        </div>
    </body>
  );
}

export { Product };