import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const Section3 = () => {
  return (
    <div className="w-full flex flex-col items-center gap-20 px-10 lg:px-20">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-2xl">
          GREAT SELECTION
        </h1>
        <p>
          No matter what you carry, you will find <br></br> the best backpack
          for your needs
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-10 md:h-96">
        <div
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/birding-backpack-designed-isolated-transparent-background_1033130-6411.jpg?w=1800)`,
          }}
          className="bg-cover bg-center flex flex-col gap-10 md:w-3/5 h-96 md:h-full"
        >
          <div className="h-4/5">
            <h1 className="text-xl lg:text-3xl">Heavy Duty Backpacks</h1>
            <div className="flex justify-between">
              <button className="mainButtonColor px-4 py-2 rounded">
                EXPLORE MORE
              </button>
            </div>
          </div>
          <div className="p-2 bg-gradient-to-b from-slate-900 to-slate-500 text-white">
            <p className="text-xs">
              Can't decide which optimal backpack to choose? Contact us , we
              will help you find the best options for you.
            </p>
            {
              <Link to={'/contact'}>
                <p className="underline">Contact Us</p>
              </Link>
            }
          </div>
        </div>
        <div className="flex flex-col justify-between w-full md:w-2/5 h-96 md:h-full">
          <h1 className="text-xl lg:text-3xl">Lightweight Backpacks</h1>
          <div
            style={{
              backgroundImage: `url(https://img.freepik.com/premium-photo/part-11-clothes-4000-5500-px-17_1190959-839.jpg?w=826)`,
            }}
            className="bg-cover bg-center flex flex-col items-cente h-3/4"
          >
            <Button style={'self-start'} buttonLabel={'Expolore More'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
