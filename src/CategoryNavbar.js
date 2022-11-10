import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";

function CategoryNavbar(props) {
  let data = props.data
  return (
    <div>
      <ListGroup className='shadow' style={{width: '18vh'}}>
        {data.map(category => (
          <NavLink to={'/' + category.toLowerCase() } style={{ textDecoration: 'none' }}>
            <ListGroup.Item className={"text-center p-3" + 
            ( window.location.href.split('/')[3] == category.toLowerCase() ? " bg-primary" : "")}>
              { category }
            </ListGroup.Item>
          </NavLink>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategoryNavbar;