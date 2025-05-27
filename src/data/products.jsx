import { createContext, useEffect, useState } from "react";
import './products.css'
import {products} from './items.js'

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(products)
    }, [])

    return (
        <ProductContext.Provider value={{items}}>
            {children}
        </ProductContext.Provider>
    )
}
