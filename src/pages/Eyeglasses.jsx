import { useContext, useState } from 'react';
import { ProductContext } from '../data/products';
import '../data/products.css';
import './Eyeglasses.css'
import {Link} from 'react-router-dom'

const Eyeglasses = () => {

  const { items } = useContext(ProductContext)
  const eyeglasses = items.filter(ent => ent.category === "eyeglasses");

  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMaterial = (value) => {
    setSelectedMaterials(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleSize = (value) => {
    setSelectedSizes(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const filteredItems = eyeglasses.filter(item => {
    const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(item.material);
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(item.size);

    const searchMatch = searchTerm.trim() === '' ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return materialMatch && sizeMatch && searchMatch;
  });



  return (
    <>
      <div className="parent">

        <div className="filter">

            <div>
              <input className='search'
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                
              />
            </div>

            <div className='scnd'>
              <div className="category">
                <div><h3>Frame Size</h3></div>
                <div className='input-txt'><input onClick={() => handleSize("Small")} type="checkbox" />Small</div>
                <div className='input-txt'><input onClick={() => handleSize("Medium")} type="checkbox" />Medium</div>
                <div className='input-txt'><input onClick={() => handleSize("Large")} type="checkbox" />Large</div>
              </div>


              <div className="material">
                <div><h3>Material</h3></div>
                <div className='input-txt'><input onClick={() => handleMaterial("Plastic")} type="checkbox" />Plastic</div>
                <div className='input-txt'><input onClick={() => handleMaterial("Metal")} type="checkbox" />Metal</div>
                <div className='input-txt'><input onClick={() => handleMaterial("TR")} type="checkbox" />TR</div>
              </div>
            </div>
          </div>

          <div className="card-container">
            {filteredItems.map(item => (
              <div className="card" key={item.id}>
                <div><Link to={`/product/${item.id}`}><img src={item.picture} className="card-img" alt={item.brand} />
                </Link></div>
                <div className="card-body">
                  <h3 className="card-title">{item.brand} {item.model_no}</h3>
                  <p className="card-description">{item.description}</p>
                  <p className="card-price">Rs: {item.price}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </>
      );

}
      export default Eyeglasses
