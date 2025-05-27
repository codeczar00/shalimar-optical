import { Link, useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ProductContext } from '../data/products'
import './Product.css'
import { CartContext } from '../data/CartProvider'

const Product = () => {
  const { items } = useContext(ProductContext)
  const { setCartItems } = useContext(CartContext) //For setting cart items!
  const { productId } = useParams()
  const [selectedOption, setSelectedOption] = useState(null)  //For selecting lenses
  const [prescriptionImage, setPrescriptionImage] = useState(null)
  const [cartdone, setCartDone] = useState(null) //For showing button, move to checkout

  const product = items.find(item => item.id == productId)
  const [totalPrice, setTotalPrice] = useState(product?.price || 0);

  if (!product) {
    return <div className="product-not-found">Product not found</div>
  }

  const handleOptionChange = (option, index) => {
    setSelectedOption(option)
    if(index === 0) setTotalPrice(product.price)
    else if(index === 1) setTotalPrice(product.price + 1500)
    else if(index === 2) setTotalPrice(product.price + 2500)
    else if(index === 3) setTotalPrice(product.price + 3500)
    setPrescriptionImage(null)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPrescriptionImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert('Please select a lens option')
      return
    }

    const cartItem = {
      ...product,
      selectedOption,
      prescriptionImage,
      totalPrice,
      quantity: 1
    }

    setCartItems((prev) => [...prev, cartItem])
    alert('Item added successfully!')
    setCartDone(true)
  }


  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-container">
          <img
            src={product.picture}
            alt={product.title}
            className="product-main-image"
          />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-price">Rs: {product.price}</p>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-specs">
            <div className="spec-row">
              <span className="spec-label">Material:</span>
              <span className="spec-value">{product.material}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Size:</span>
              <span className="spec-value">{product.size}</span>
            </div>
          </div>

          <div className="lens-options">
            <h3>Select Lens Type</h3>
            <div className="options-grid">
              {['Simple', 'Blue Cut: 1500 Rs', 'PhotoSun: 2500 Rs', 'Progressive: 3500 Rs'].map((option, index) => (
                <div
                  key={option}
                  className={`option-card ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => handleOptionChange(option, index)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {/* {selectedOption && (
            <div className="prescription-upload">
              <h3>Upload Prescription</h3>
              <input
                type="file"
                id="prescription-upload"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <label htmlFor="prescription-upload" className="upload-btn">
                {prescriptionImage ? 'Change Image' : 'Upload Image'}
              </label>
              {prescriptionImage && (
                <div className="image-preview">
                  <img src={prescriptionImage} alt="Prescription preview" />
                  <button onClick={() => setPrescriptionImage(null)} className='upload-btn'>Remove Image</button>
                </div>
              )}
            </div>
          )} */}
          
          <p className="product-price">Total Rs: {totalPrice}</p>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={!selectedOption}
          >
            Add to Cart
          </button>
          {cartdone && (
            <Link to={'/cart'}><button
            className="add-to-cart-btn"
          >
            Visit Cart
          </button>
          </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product