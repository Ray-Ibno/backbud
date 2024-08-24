import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faShield, faTree } from '@fortawesome/free-solid-svg-icons'
import { faCottonBureau } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const Section2 = () => {
  const cardArr = [
    {
      imgIcon: <FontAwesomeIcon icon={faShield} />,
      desc: 'Backpacks are incredibly sturdy and comfortable',
    },
    {
      imgIcon: <FontAwesomeIcon icon={faCottonBureau} size="3x" />,
      desc: 'Our backpacks are designed to feel good against your back providing comfort and protection against back related problems.',
    },
    {
      imgIcon: <FontAwesomeIcon icon={faTree} color="black" size="3x" />,
      desc: 'Immerse yourself with the beauty of nature while carrying all the stuff you need and still feel light.',
    },
    {
      imgIcon: <FontAwesomeIcon icon={faDollar} size="3x" />,
      desc: 'Our backpack offer many affordable options with very minimal quality compromise.',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center gap-20 px-10 lg:px-20 py-40">
      <div className="flex flex-col gap-10 2xl:gap-0 2xl:flex-row 2xl:justify-between w-full">
        <h1 className="text-3xl md:text-5xl text-left font-black leading-tight 2xl:max-w-2xl">
          EXPLORE OUR EXTENSIVE COLLECTION OF BACKPACKS
        </h1>
        <div className="flex flex-col gap-5 2xl:gap-0 2xl:justify-between max-w-2xl">
          <p>
            Explore ourt extensive collection of backpacks, ranging from compact
            and lightweight backpacks to spacious and durable backpacks.
            Designed with durability, comfort, and convinience in mind. Our
            backpacks are built to provide you with enough room for equipments
            necessary to your adventures.
          </p>
          <Link to={'/shop'}>
            <Button buttonLabel={'Buy Now'} />
          </Link>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {cardArr.map((item, index) => (
          <div
            key={item.desc}
            className={`flex flex-col gap-4 w-full h-full ${
              index == cardArr.length - 2
                ? 'bg-slate-500 text-white'
                : 'bg-sky-50'
            } rounded-3xl p-10`}
          >
            <div className="w-24 h-24 bg-slate-50 rounded-full grid place-items-center border border-black">
              {item.imgIcon}
            </div>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section2
