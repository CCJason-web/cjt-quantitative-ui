import { Nav, Navbar, Button, InputGroup, Dropdown, FormControl } from 'react-bootstrap';
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


  const getAllProduct = async () => {
    await axios.get("/quantity-search/search/products").then(
      response => setProductData(response.data)
    ).catch(e =>
      console.log(e));
  }

  type CustomToggleProps = {
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
  };
  
  const CustomToggle = React.forwardRef(
    (props: CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
      <a
        href=""
        ref={ref}
        onClick={e => {
          e.preventDefault();
          props.onClick(e);
        }}
      >
        {props.children}
        <span style={{ paddingLeft: "5px" }}>&#x25bc;</span>
      </a>
    )
  );
  
  type CustomMenuProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    labeledBy?: string;
  };
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    (props: CustomMenuProps, ref: React.Ref<HTMLDivElement>) => {
      const [value, setValue] = useState("");
      return (
        <div
          ref={ref}
          style={props.style}
          className={props.className}
          aria-labelledby={props.labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(props.children).filter(
              (child: any) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
 
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
            {/* <div className="search-bar-dropdwon">
              <input type="text" placeholder="Search..." className="form-control" onChange={e => onInputChange(e)} data-bs-toggle="dropdown" aria-expanded="false" />
              <ul className="list-group dropdown-item" aria-labelledby="dropdownMenuButton1">
                {productData?.map(product =>
                  <button type="button" className="list-group-item list-group-item-action dropdown-item">
                    {product.productName}
                  </button>
                )}
              </ul>
              </div> */}
            <Dropdown>
              <Dropdown.Toggle as={CustomMenu} id="dropdown-custom-components">
              </Dropdown.Toggle>
              <Dropdown.Menu> 
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
