import { Nav, Navbar, Button, InputGroup, Dropdown, FormControl } from 'react-bootstrap';
import React, { FormEventHandler, useState } from 'react';
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


  const getAllProduct = async () => {
    await axios.get("/quantity-search/search/products").then(
      response => setProductData(response.data)
    ).catch(e =>
      console.log(e));
  }

  function onInputChange (event: React.ChangeEvent<HTMLInputElement>){
    axios.get("/quantity-search/search/productsName?productName="+event.target.value).then(
      response => setProductData(response.data)
    ).catch(e =>
      console.log(e));
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
            <Dropdown>
              <Dropdown.Toggle variant="none" >
              <input type="text" placeholder="Search..." className="form-control" onChange={e => onInputChange(e)}/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
              {productData?.map(product =>
                   <Dropdown.Item>{product.productName}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <InputGroup.Prepend>
              <Button type="get" onClick={getAllProduct} variant="outline-secondary" className="btn-search-submit" title="Search..." />
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      </Navbar>
    </header >
  )
}
