import { Nav, Navbar, Button, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

type product = {
  productId: number,
  productName: string,
  productType: string
}
/**
 * React component for the Header Section.
 */
export const Header = () => {

  const [productData, setProductData] = useState<product[]>([]);
  const [options, setOptions] = useState([]);

  const getAllProduct = async () => {
    await axios.get("/quantity-search/search/products").then(
      response => setProductData(response.data)
    ).catch(e =>
      console.log(e));
  }

  const onInputChange = (event: React.ChangeEvent) => {
    console.log(event.target.nodeValue);
  }


  return (
    <header className="navbar-inverse header">
      <Navbar bg="light" variant="light" sticky="top">
        <Navbar.Brand ></Navbar.Brand>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto navbar-nav navbar-right">
          <Nav.Link href="#Insights" className=" hidden-sm" >Insights</Nav.Link>
          <Nav.Link href="#Funds" className=" hidden-sm">Funds</Nav.Link>
          <Nav.Link href="#Strategies" className=" hidden-sm">Strategies</Nav.Link>
          <Nav.Link href="#Key" className=" hidden-sm">Key strengths</Nav.Link>
          <Nav.Link href="#priciAboutng" className=" hidden-sm">About us</Nav.Link>
        </Nav>
        <div className=" form-inline">
          <InputGroup>
            <div className="search-bar-dropdwon">
              <input type="text" placeholder="Search..." className="form-control" onChange={e => onInputChange(e)}/>
              <ul className="list-group">
                {productData?.map(product =>
                  <button type="button" className="">
                    {product.productName}
                  </button>
                )}
              </ul>
            </div>
            <InputGroup.Prepend>
              <Button type="get" onClick={getAllProduct} variant="outline-secondary" className="btn-search-submit" title="Search..." />
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      </Navbar>
    </header>
  )
}
