import { QuantityProvider } from '../context/QuantityContext';
import { Quantity } from '../Quantity';
import ReactDom from 'react-dom';

/**
 * App is the root React component.
 */
function Main(props: any) {
  return (
      <QuantityProvider>
        <Quantity />
      </QuantityProvider>
  );
}
export default Main
