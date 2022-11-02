import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Navbar() {
  return (
    <ListGroup className='col-2 p-4'>
    <ListGroup.Item className='text-center p-3' action href='#'><Link to='/'>Kategori 1</Link></ListGroup.Item>
    <ListGroup.Item className='text-center p-3' action href=''><Link to='/Item'>Kategori 2</Link></ListGroup.Item>
    <ListGroup.Item className='text-center p-3' action href=''>Kategori 3</ListGroup.Item>
    <ListGroup.Item className='text-center p-3' action href=''>Kategori 4</ListGroup.Item>
    <ListGroup.Item className='text-center p-3' action href=''>Kategori 5</ListGroup.Item>
    </ListGroup>
  );
}

export default Navbar;