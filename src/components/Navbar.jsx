import './Navbar.css'
import { Images } from '../data/images.js'
import '../App.css'
import { useEffect, useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../data/CartProvider'


function Navbar() {

  const {cartItems} = useContext(CartContext)
  const [isopen, setIsOpen] = useState(false)
  

  const handleMenu = () => {
    setIsOpen(!isopen)
  }

  const listref = useRef(null)
  const btnref = useRef(null)

  useEffect(() => {
    const handleDropDown = (event) => {
      if (listref.current && !listref.current.contains(event.target) &&
        btnref.current && !btnref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const events = ['mousedown', 'touchstart', 'scroll']
    events.forEach((event) => {
      document.addEventListener(event, handleDropDown);
    })

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleDropDown);
      })
    }
  }, [])

  return (
    <>
      <nav>
        <div className="logo"><Link to="/"><img src={Images.logo} alt="logo" /></Link></div>

        <ul ref={listref} className={isopen ? 'dropdown-content-mobile' : 'dropdown-content'}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/eyeglasses" onClick={() => setIsOpen(false)}>Eyeglasses</Link></li>
          <li><Link to="/sunglasses" onClick={() => setIsOpen(false)}>Sunglasses</Link></li>
          <li><Link to="/lenses" onClick={() => setIsOpen(false)}>Lenses</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='buttons'>
          <div>
            <button className='menu-btn' ref={btnref} onClick={handleMenu}>
              <img src={isopen ? Images.cross : Images.menu} alt="menu toggle" />
            </button>
          </div>
          <div className='end-btn'>
            <button className='cart-btn'><Link to={'/cart'}><img src={Images.carticon} alt="cart" /><span>{cartItems.length}</span></Link></button>
            <button className='login-btn'><Link to={'/login'}><img src={Images.login} alt="login" /></Link></button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar