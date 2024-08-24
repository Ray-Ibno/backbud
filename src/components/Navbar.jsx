import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { ItemsContext } from '../context/cart/ItemsContext'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [itemsInCart, setItemsInCart] = useContext(ItemsContext)

  const location = useLocation()

  let navStyles = {
    color: `${location.pathname === '/' ? 'text-white' : 'text-black'}`,
    position: `${location.pathname === '/' ? 'absolute' : ''}`,
    border: `${location.pathname === '/' ? '' : 'border-b-2 border-slate-100'}`,
  }

  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div
      className={`flex justify-between items-center ${navStyles.position} ${navStyles.border} w-full px-10
    lg:px-20 py-10`}
    >
      <div className="w-60">
        <h1 className={`text-2xl font-bold ${navStyles.color}`}>BACKBUD</h1>
      </div>
      <ul
        className={`${
          isNavOpen ? 'flex' : 'hidden md:flex'
        } absolute top-0 left-0 right-0 py-10 flex-col gap-10 justify-between items-center bg-black
       md:static md:py-0 md:gap-0 md:bg-transparent ${
         isNavOpen ? 'text-white' : navStyles.color
       } md:flex-row md:w-60`}
      >
        <NavLink to={'/'} className={(link) => (link.isActive ? 'active' : '')}>
          <p className="text-sm">HOME</p>
        </NavLink>
        <NavLink
          to={'/blog'}
          className={(link) => (link.isActive ? 'active' : '')}
        >
          <p className="text-sm">BLOG</p>
        </NavLink>
        <NavLink
          to={'/shop'}
          className={(link) => (link.isActive ? 'active' : '')}
        >
          <p className="text-sm">SHOP</p>
        </NavLink>
      </ul>

      <div className={`flex gap-5 items-center ${navStyles.color}`}>
        <Link to={'/cart'}>
          <div className={`flex items-center justify-end md:w-60`}>
            {<FontAwesomeIcon icon={faCartShopping} />}
            <p className="text-xs">{itemsInCart.length}</p>
          </div>
        </Link>
        <button
          onClick={handleClick}
          className={`md:hidden ${
            isNavOpen ? 'absolute top-10 right-10 text-black' : ''
          }`}
        >
          <FontAwesomeIcon
            className={isNavOpen ? 'text-white' : navStyles.color}
            icon={isNavOpen ? faX : faBars}
          />
        </button>
      </div>
    </div>
  )
}

export default Navbar
