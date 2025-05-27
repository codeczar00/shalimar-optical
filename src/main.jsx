import { BrowserRouter } from "react-router-dom"; 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from "./data/products.jsx";
import { CartProvider } from './data/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>  
  </BrowserRouter>,
)
