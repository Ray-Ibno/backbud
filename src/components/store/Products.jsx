import { useContext } from 'react'
import { ItemsContext } from '../../context/cart/ItemsContext'
import { EstimatedTotalContext } from '../../context/cart/estimatedTotal'
import Product from './Product'

const Products = ({ selectedType, products }) => {
  const [itemsInCart, setItemsInCart] = useContext(ItemsContext)
  const [estimatedTotal, setEstimatedTotal] = useContext(EstimatedTotalContext)

  const handleAddToCart = (target) => {
    const itemExists = itemsInCart.some((item) => item.name === target.name)
    if (itemExists) return
    setItemsInCart((prevItemsInCart) => [...prevItemsInCart, target])
    setEstimatedTotal((prevEstimatedTotal) => prevEstimatedTotal + target.price)
  }

  console.log('products rendered')

  return (
    <div className="w-full md:ml-20">
      <div className="pb-2 border-b-2">
        <h1 className="text-lg text-end md:text-start font-bold">
          {selectedType}
        </h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center pt-10">
        {products.map(
          (product) =>
            product.type === selectedType && (
              <Product
                key={product.name}
                product={{
                  img: product.img,
                  name: product.name,
                  price: product.price,
                  handleAddToCart: (product) => handleAddToCart(product),
                }}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Products
