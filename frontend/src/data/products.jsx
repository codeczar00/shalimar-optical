import { createContext, useEffect, useState } from "react";
import axios from "axios";
import './products.css'

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const api_url = import.meta.env.VITE_API_URL;
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(api_url)
            .then((response) => {
                setItems(response.data)
            })
            .catch((err) => 
                console.error('Error fetching items:', err));
    }, [])

    return (
        <ProductContext.Provider value={{items}}>
            {children}
        </ProductContext.Provider>
    )
}
