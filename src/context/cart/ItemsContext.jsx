import React, { useState } from 'react'

export const ItemsContext = React.createContext()

const ItemsContextProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([])
  return (
    <ItemsContext.Provider value={[itemsInCart, setItemsInCart]}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider
