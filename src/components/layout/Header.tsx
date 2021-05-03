import { Nav, Navbar, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import '../../css/header.css';
import axios from 'axios';
import SearchbarDropdown from '../SearchBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
import navList from './navList'

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
    props.parentCallback(false);

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
          {navList.map(nav => (
             <Nav.Link href={nav.link} className=" hidden-sm" >{nav.title}</Nav.Link>
            ))}
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

