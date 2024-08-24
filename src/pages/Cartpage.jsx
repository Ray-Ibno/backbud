import { useContext } from 'react'
import { ItemsContext } from '../context/cart/ItemsContext'
import { Link } from 'react-router-dom'
import CartItem from '../components/cart/CartItem'
import { EstimatedTotalContext } from '../context/cart/estimatedTotal'

const CartPage = () => {
  const [itemsInCart, setItemsInCart] = useContext(ItemsContext)
  const [estimatedTotal, setestimatedTotal] = useContext(EstimatedTotalContext)
  let currentItemsInCart = [...itemsInCart]

  const handleDelete = (targetItem) => {
    const filteredItems = [...itemsInCart].filter(
      (item) => item.name !== targetItem.name
    )
    setItemsInCart(filteredItems)
  }

  return (
    <div className="px-10 lg:px-20">
      <div className="w-full py-10 flex justify-between">
        <h1 className="text-2xl md:text-4xl">Your Cart</h1>
        {
          <Link to={'/shop'}>
            <p className="underline text-xs md:text-sm">Continue shopping</p>
          </Link>
        }
      </div>
      <div className="border-slate-100">
        <div className="flex justify-between text-xs text-slate-400 border-b-2 pb-2 md:pb-5">
          <div>
            <p>PRODUCT</p>
          </div>
          <div className="flex justify-between w-2/5">
            <p>QUANTITY</p>
            <p>TOTAL</p>
          </div>
        </div>
        <div
          className={`flex flex-col gap-10 py-10 ${
            currentItemsInCart.length > 0 ? 'border-b-2' : ''
          }`}
        >
          {currentItemsInCart.map((cartItem) => (
            <CartItem
              item={{
                img: cartItem.img,
                name: cartItem.name,
                price: cartItem.price,
                type: cartItem.type,
                delete: (targetItem) => handleDelete(targetItem),
              }}
              key={cartItem.name}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-1/4 py-10 ml-auto flex flex-col gap-4 md:text-end">
        <h1 className="text-sm md:text-base font-bold">
          Estimated Total:&nbsp;&nbsp; {estimatedTotal} USD
        </h1>
        <p className="text-xs">
          Taxes, discount and shipping calculated at checkout
        </p>
        <button
          className={`py-5 text-center w-full rounded-lg ${
            itemsInCart.length > 0 ? 'mainButtonColor' : 'bg-slate-100'
          }`}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage
