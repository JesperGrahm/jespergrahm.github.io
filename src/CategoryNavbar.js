import React from "react";
import { Link, Outlet } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import { getVersion } from './helpers';

function CategoryNavbar(props) {
  let data = props.data
  const isActive = true;
  return (
    <div>
      <ListGroup className='shadow' style={{width: '18vh'}}>
        {data.map(category => (
          <Link to={'/' + getVersion() + '/' + category.toLowerCase() }
                    style={{ textDecoration: 'none' }}>
            <ListGroup.Item className={"text-center p-3" + 
            ( window.location.href.split('/')[4] == category.toLowerCase() ? " bg-primary" : "")}>
              { category }
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
      <Outlet />
    </div>
  );
}

export default CategoryNavbar;