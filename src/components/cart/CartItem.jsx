import { useContext, useState } from 'react'
import { EstimatedTotalContext } from '../../context/cart/estimatedTotal'

const CartItem = (props) => {
  let [itemQuantity, setItemQuantity] = useState(1)
  const [estimatedTotal, setEstimatedTotal] = useContext(EstimatedTotalContext)
  const itemPrice = props.item.price
  const totalPrice = props.item.price * itemQuantity

  const { name, price, type, img } = props.item

  const handleIncrement = () => {
    return () => {
      setItemQuantity((prevItemQuantity) => prevItemQuantity + 1)
      setEstimatedTotal((prevEstimatedTotal) => prevEstimatedTotal + itemPrice)
    }
  }

  const handleDecrement = () => {
    if (itemQuantity < 1) return handleDelete()
    return () => {
      setItemQuantity((prevItemQuantity) => prevItemQuantity - 1)
      setEstimatedTotal((prevEstimatedTotal) => prevEstimatedTotal - itemPrice)
    }
  }

  const handleDelete = () => {
    return () => {
      props.item.delete(props.item)
      setEstimatedTotal((prevEstimatedTotal) => prevEstimatedTotal - totalPrice)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between h-24">
      <div className="flex gap-2">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-16 sm:w-28 h-full bg-cover bg-center"
        ></div>
        <div>
          <h1 className="text-xs md:text-base">Name: {name}</h1>
          <p className="text-xs md:text-base">Price: ${price}</p>
          <p className="text-xs md:text-base">Type: {type}</p>
        </div>
      </div>
      <div className="flex justify-between items-center sm:w-2/5">
        <div className="flex gap-2 md:gap-10 items-center">
          <div className="w-24 md:w-32 flex justify-between items-center border p-1 md:p-2 border-black rounded-sm">
            <button className="" onClick={handleDecrement()}>
              -
            </button>
            <p className="text-xs">{itemQuantity}</p>
            <button className="" onClick={handleIncrement()}>
              +
            </button>
          </div>
          <button className="text-sm md:text-base" onClick={handleDelete()}>
            delete
          </button>
        </div>

        <div>
          <p className="text-xs md:text-base">${totalPrice}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
