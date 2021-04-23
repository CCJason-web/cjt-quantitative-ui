import React, {useState} from 'react';
import { Header } from './components/layout/Header';
import { Carousel } from 'react-bootstrap';
import image from './static/Quantity-or-quality-twitter.jpeg';

/** 
 * Quantity is the main React component.
*/
export const Quantity: React.FC<{}> = () => {
  /**
   * All the variables for holding state:
   * quantityArray: Holds the current state of the quantity
   */
  const [showBody, setShowBody] = useState<boolean>(true);
  function callbackFunction(childData: boolean){
    setShowBody(childData)
    };
  return (
    <>
      <Header parentCallback = {(e: boolean) => callbackFunction(e)}/>
      {showBody? <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> :null}
    </>
  );
}