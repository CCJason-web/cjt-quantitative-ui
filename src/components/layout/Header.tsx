import { Nav, Navbar, Button, InputGroup, Dropdown, FormControl } from 'react-bootstrap';
import React, { FormEventHandler, useState, useRef } from 'react';
import axios from 'axios';
import SearchbarDropdown from '../../util/SearchBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../login";
import SignUp from "../signup";

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
  // const [options, setOptions] = useState([]);

  const getAllProduct = async () => {
    await axios.get("/quantity-search/search/products").then(
      response => setProductData(response.data)
    ).catch(e =>
      console.log(e));
  }

  const defaultOptions: any = [];


  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    axios.get("/quantity-search/search/productsName?productName=" + event.target.value).then(
      response => setProductData(response.data)
    ).catch(e =>
      console.log(e));
  };

  return (
    <Router>
      <header className="header">
        <Navbar bg="light" variant="light" fixed="top">
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
              <SearchbarDropdown className=" " options={productData.map(product => product.productName)} onInputChange={onInputChange}></SearchbarDropdown>
            </InputGroup>
          </div>
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </Navbar>
      </header >
    </Router>
  )
}
