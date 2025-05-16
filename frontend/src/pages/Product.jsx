import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../data/products';

const Product = () => {

  const {items} = useContext(ProductContext)
  const {productId} = useParams();
  console.log("Route param id:", productId);

  const product = items.find(item => item.id == productId);

if (!product) return <p>Product not found.</p>;

return (
  <>
    
  </>
);

}

export default Product
