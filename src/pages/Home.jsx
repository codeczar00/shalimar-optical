import { useContext, useEffect, useState } from 'react'
import './Home.css'
import { headerPic, features } from '../data/images'
import { ProductContext } from '../data/products';
import '../data/products.css'; 
import {Link} from 'react-router-dom'

const Home = () => {

  //Logic for carousel
  const [picInterval, setPicInterval] = useState(0)
  const picArray = headerPic

  //Accessing items and separating best and fresh arrivals! 
  const {items} = useContext(ProductContext)
  
  const eyeglasses = items.filter(ent => ent.category === "eyeglasses");
  const sunglasses = items.filter(ent => ent.category === "sunglasses");
  const feyeglasses = eyeglasses.slice(0,4);
  const fsunglasses = sunglasses.slice(0,4);
  const combinedFresh = [...feyeglasses, ...fsunglasses]

  const bestGlasses = eyeglasses.slice(0,2);
  const bestSunglass = sunglasses.slice(0,2)
  const bestCombined = [...bestGlasses, ...bestSunglass]

  useEffect(() => {    

    const interval = setInterval(() => {
      setPicInterval((picInterval) => (picInterval + 1) % picArray.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="head-img">
        <img src={picArray[picInterval]} alt="header" />
      </div>

      <h1 className="new-arrival">Latest <span>Collection</span></h1>
      <h3>Discover our freshest arrivals — handpicked for the season’s latest trends.</h3>

      <div className="card-container">
      {combinedFresh.map(item => (
        <div className="card" key={item.id}>
          <div><Link to={`product/${item.id}`}><img src={item.picture} className="card-img" alt={item.brand} />
          </Link></div>
          <div className="card-body">
            <h3 className="card-title">{item.brand} {item.model_no}</h3>
            <p className="card-description">{item.description}</p>
            <p className="card-price">Rs: {item.price}</p>
          </div>
        </div>
      ))}
    </div>

      <h1 className="new-arrival">Best <span>Sellers</span></h1>
      <h3>Explore our best-selling picks — loved by customers and trusted for top style.</h3>

      <div className="card-container">
      {bestCombined.map(item => (
        <div className="card" key={item.id}>
          <div><Link to={`product/${item.id}`}><img src={item.picture} className="card-img" alt={item.brand} /></Link></div>
          <div className="card-body">
            <h3 className="card-title">{item.brand} {item.model_no}</h3>
            <p className="card-description">{item.description}</p>
            <p className="card-price">Rs: {item.price}</p>
          </div>
        </div>
      ))}
    </div>

      <div className='f-parent'>
        <div className="features">
          <div className="quality feature">
            <img src={features[0].image} alt="quality" />
            <div>{features[0].title}</div>
            <p>{features[0].description}</p>
          </div>

          <div className="support feature">
            <img src={features[1].image} alt="support" />
            <div>{features[1].title}</div>
            <p>{features[1].description}</p>
          </div>

          <div className="shipping feature">
            <img src={features[2].image} alt="delivery" />
            <div>{features[2].title}</div>
            <p>{features[2].description}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
