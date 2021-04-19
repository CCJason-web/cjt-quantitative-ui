import { Nav, Navbar, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import '../../css/header.css';
import axios from 'axios';
import SearchbarDropdown from '../SearchBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";

type product = {
  productId: number,
  productName: string,
  productType: string
}
/**
 * React component for the Header Section.
 */

export const Header = (props: any) => {

  const [productData, setProductData] = useState<product[]>([]);
  const [showForm, setShowForm] = React.useState(false)

  function sendBackData (){
    setShowForm(true);
    props.parentCallback(showForm);
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    axios.get("/quantity-search/search/productsName?productName=" + event.target.value).then(
      response => setProductData(response.data)
    ).catch(e =>
      console.log(e));
  };

  return (
    
    <Router >   
        <Navbar className="header" bg="light" variant="light" sticky="top">
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
            <Link className="nav-link" to={"/sign-in"} onClick={sendBackData} >Sign in</Link>
            <Link className="nav-link" to={"/sign-up"} onClick={sendBackData} >Sign up</Link>
          </div>
        </Navbar>

      { showForm ?
      <div className="outer">
        <div className="inner sticky-top">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div> 
      :null}
    </Router>
  )
}

