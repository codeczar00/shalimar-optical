import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Eyeglasses from './pages/Eyeglasses'
import Sunglasses from './pages/Sunglasses'
import Lenses from './pages/Lenses'
import ScrolltoTop from './components/ScrolltoTop'


function App() {

  return (
    <div>
      <Navbar />
      <ScrolltoTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sunglasses' element={<Sunglasses />} />
        <Route path='/eyeglasses' element={<Eyeglasses />} />
        <Route path='/lenses' element={<Lenses />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<Placeorder />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App