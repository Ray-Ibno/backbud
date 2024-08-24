import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import nikeLogo from '../images/nike.png'
import cotopaxiLogo from '../images/cotopaxi.svg'
import gregoryLogo from '../images/gregory.png'
import samsoniteLogo from '../images/samsonite.png'
import thenorthfaceLogo from '../images/thenorthface.png'

const Footer = () => {
  const brandLogos = [
    nikeLogo,
    cotopaxiLogo,
    samsoniteLogo,
    thenorthfaceLogo,
    gregoryLogo,
  ]
  return (
    <>
      <div className="w-full h-96 bg-black">
        <ul className="h-full px-10 lg:px-20 flex justify-between items-center">
          {brandLogos.map((item) => (
            <li key={item}>
              <div
                className="w-14 h-14 md:w-32 md:h-32 bg-cover invert bg-no-repeat"
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row w-full px-10 lg:px-20 pt-20">
        <div className="flex flex-col justify-between md:w-2/6 h-64 md:h-96">
          <h1 className="text-2xl xl:text-4xl font-black">
            JOIN OUR{' '}
            <span>
              <p className="text-3xl xl:text-5xl font-black text-sky-800">
                NEWSLETTER
              </p>
            </span>
          </h1>
          <div className="flex flex-col gap-4 justify-evenly">
            <p className="text-lg font-bold">Contact</p>
            <p>+(1) 000 123 4567</p>
            <p>sample@gmail.com</p>
            <p>
              No: 76 A, East Madison Street,<br></br> Baltimore, MD, USA 4508
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-between items-center md:pb-20 mx-auto md:w-2/6 h-64 md:h-96">
          <p className="text-xs xl:text-lg">
            Subscribe to our newsletter to be the first to know about new
            models, exclusive events, and other information relating to BackBud.
          </p>

          <h1 className="font-black text-4xl">BackBud</h1>
        </div>
        <div className="flex flex-col justify-between items-start md:items-end lg:w-2/6 lg:h-96">
          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-sky-50 p-2 rounded"
            />
            <button className="mainButtonColor text-white px-4 py-2 rounded">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-sm xl:text-lg font-bold mb-4">Social Links</p>
            <ul className="flex flex-col gap-2 text-xs xl:text-sm md:text-right">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center px-10 py-10">
        <p className="text-xs">
          Copyright &copy; Sakura. All right Reserved. | Privacy Policy |
          Designed by Usman A.
        </p>
      </div>
    </>
  )
}

export default Footer
