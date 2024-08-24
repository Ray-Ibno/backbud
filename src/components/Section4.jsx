import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import allItems from '../utils/ArrayUtils'
import featuredBackpacks from '../utils/FeaturedBackpack'

const Section4 = () => {
  const [backpacks, setBackpacks] = useState([
    ...featuredBackpacks.filter((backpack) => backpack.type === 'Duffel'),
  ])
  const [selectedType, setSelectedType] = useState('Duffel')

  const numberOfProducts = allItems.filter(
    (item) => item.type === selectedType
  ).length

  const backPackTypes = ['Duffel', 'Hiking', 'Rucksack']

  const handleClick = (selected) => {
    setSelectedType(selected)
    switch (selected) {
      case 'Duffel':
        setBackpacks(
          featuredBackpacks.filter((backpack) => backpack.type === 'Duffel')
        )
        break
      case 'Hiking':
        setBackpacks(
          featuredBackpacks.filter((backpack) => backpack.type === 'Hiking')
        )
        break
      case 'Rucksack':
        setBackpacks(
          featuredBackpacks.filter((backpack) => backpack.type === 'Rucksack')
        )
        break
      default:
        ''
    }
  }

  return (
    <div className="flex flex-col justify-center w-full px-10 lg:px-20 py-40">
      <div className="mb-20">
        <h1 className="text-3xl md:text-5xl text-left font-black leading-tight max-w-2xl">
          OUR COLLECTION
        </h1>
        <p>
          Explore our extensive collection of backpacks, ranging from compact
          and lightweight bacpacks to spacious and durable variants.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
        <ul className="flex md:flex-col w-full md:w-1/4">
          {backPackTypes.map((item, index) => (
            <li key={index}>
              <button
                className={`p-4 w-full text-center text-xs md:text-lg md:text-start ${
                  item === selectedType
                    ? 'bg-sky-500 border-b-0 text-white rounded-lg'
                    : index < backPackTypes.length - 1
                    ? 'md:border-b-2'
                    : ''
                }`}
                onClick={() => handleClick(item)}
              >{`${item} Backpacks`}</button>
            </li>
          ))}
        </ul>
        <div className="w-full grid grid-cols md:grid-cols-2 gap-5 grid-rows-2">
          {backpacks.map((item) => (
            <div
              key={item.name}
              style={{ backgroundImage: `url(${item.img})` }}
              className="flex items-end bg-cover bg-center h-96 rounded-3xl overflow-hidden"
            >
              <div className="p-2 flex justify-between items-center w-full bg-slate-400">
                <div className="flex flex-col">
                  <p className="font-medium text-xl">{item.name}</p>
                  <p className="font-extralight text-sm text-slate-300">
                    ${item.price}
                  </p>
                </div>

                <div className="border-solid border border-slate-300 w-12 h-12 rounded-full">
                  <button className="w-full h-full">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div>
              <div className="flex">
                <p className="font-bold">Category:&nbsp;</p>
                <p>{selectedType}</p>
              </div>
              <div className="flex">
                <p className="font-bold">{numberOfProducts}&nbsp;</p>
                <p>products</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
