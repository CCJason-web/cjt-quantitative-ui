import { Nav, Navbar, Button, InputGroup, Dropdown, FormControl } from 'react-bootstrap';
import React, { FormEventHandler, useState, useRef } from 'react';
import axios from 'axios';
import SearchbarDropdown from '../../util/SearchBar';

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

  // function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   axios.get("/quantity-search/search/productsName?productName=" + event.target.value).then(
  //     response => setProductData(response.data)
  //   ).catch(e =>
  //     console.log(e));
  // }
  const defaultOptions: any = [];

  for (let i = 0; i < 10; i++) {
    defaultOptions.push(`option ${i}`);
    defaultOptions.push(`suggesstion ${i}`);
    defaultOptions.push(`advice ${i}`);
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions(
      defaultOptions.filter((option: string) => option.includes(event.target.value))
    );
  };

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
            <SearchbarDropdown className=" hidden-sm" options={options} onInputChange={onInputChange}></SearchbarDropdown>
          </InputGroup>
        </div>
      </Navbar>
    </header >
  )
}
