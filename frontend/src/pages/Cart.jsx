import { useEffect } from "react"
import { CartContext } from "../data/CartProvider"


const Cart = () => {

  const [cartItems, setCartItems] = useContext(CartContext)

  const incrementQuantity = (product) => {
    return ++product.quantity
  }

  useEffect(() => {

  })

  return (
    <div>
      
    </div>
  )
}

export default Cart
