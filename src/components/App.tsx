import { useState, useEffect } from 'react';
import '../css/App.css';
import axios from 'axios';


type Product = {
  productId: number;
  productName?: string;
  productType?: string;
}

function App() {
  const [productDatas, setProductDatas] = useState<Product[]>();

  useEffect(() => {
    getProductDataWithAxios();
  }, []);

  const getProductDataWithAxios = async () => {
    const response = await axios.get("/quantity-search/search/products").then(
      response => setProductDatas(response.data)
    ).catch(e =>
      console.log(e));


  };

  return (
    <div className="App">
      <div>
      {productDatas?.map(product => (<p>{product.productName}</p>))}
      </div>
    </div>
  );
}

export default App;
