import { Link } from 'react-router-dom'
import homeImage from '../images/homeBackgroundImage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import Button from '../components/ui/Button'

const Section1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${homeImage})` }}
      className="bg-cover w-full h-screen flex flex-col items-center justify-evenly bg-slate-100 px-10 lg:px-20"
    >
      <div className="flex flex-col items-center">
        <div className="max-w-3xl mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-center font-black leading-tight text-white">
            YOUR TRAVELLING BUDDY
          </h1>
        </div>
        {
          <Link to={'/shop'}>
            <Button buttonLabel={'Shop Now'} />
          </Link>
        }
      </div>
      <div className="self-start">
        <ul className="flex flex-col gap-4 items-start text-white">
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
      </div>
      <div className="max-w-lg bg-slate-200 p-6 rounded-xl self-start">
        <p>
          Discover the perfect backpack for your outdoor advertures at our
          Backpack Store. Wether you're planning a weekend hiking trip, a
          backpacking expedition, or a music festival getaway, we have the ideal
          backpack to suit your needs.
        </p>
      </div>
    </div>
  )
}

export default Section1
