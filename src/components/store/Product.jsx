import Button from '../ui/Button'

const Product = ({ product }) => {
  return (
    <div
      key={product.name}
      style={{ backgroundImage: `url(${product.img})` }}
      className={`flex items-end w-full h-56 bg-cover bg-center rounded-md overflow-hidden`}
    >
      <div className="flex bg-gradient-to-t from-stone-900 p-5 justify-between w-full">
        <div>
          <h1 className="text-white font-medium">{product.name}</h1>
          <h1 className="text-xs font-thin text-white">${product.price}</h1>
        </div>
        <Button
          onClick={() => product.handleAddToCart(product)}
          buttonLabel={'Add to cart'}
        />
      </div>
    </div>
  )
}

export default Product
