import { useContext, useState } from 'react';
import { ProductContext } from '../data/products';
import '../data/products.css';
import {Link} from 'react-router-dom'


const Lenses = () => {

  const { items } = useContext(ProductContext)
  const lenses = items.filter(ent => ent.category === "lenses");


  return (
    <>
      <div className="parent">

        <div className="card-container">
          {lenses.map(item => (
            <div className="card" key={item.id}>
              <div><Link to={`/product/${item.id}`}><img src={item.picture} className="card-img" alt={item.brand} />
                </Link></div>
              <div className="card-body">
                <h3 className="card-title">{item.brand} {item.model_no}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Lenses