import { useState } from 'react'
import Filter from '../components/store/Filter'
import Products from '../components/store/Products'
import Sidebar from '../components/store/StoreSidebar'
import productsArr from '../utils/ArrayUtils'

const ProductStore = () => {
  const products = [...productsArr]
  const [selectedType, setSelectedType] = useState('Duffel')
  const [selectedProducts, setSelectedProducts] = useState([...products])

  const sortProduct = (filter) => {
    switch (filter) {
      case 'Price: low to high':
        return setSelectedProducts(products.sort((a, b) => a.price - b.price))
      case 'Price: high to low':
        return setSelectedProducts(products.sort((a, b) => b.price - a.price))
      default:
        ''
    }
  }

  const changeType = (type) => {
    setSelectedType(type)
    setSelectedProducts([...products])
  }

  return (
    <div className="px-10 lg:px-20 w-full">
      <div className="pt-14">
        <h1 className="text-2xl md:text-4xl font-bold">
          Treat yourself.<br></br>You deserve it.
        </h1>
      </div>
      <div className="w-full flex justify-end pb-4">
        <Filter changeFilter={(filter) => sortProduct(filter)} />
      </div>
      <div className="flex flex-col md:flex-row">
        <Sidebar
          changeType={(type) => changeType(type)}
          selectedType={selectedType}
        />
        <Products selectedType={selectedType} products={selectedProducts} />
      </div>
    </div>
  )
}

export default ProductStore
