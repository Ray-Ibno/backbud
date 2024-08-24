import Navbar from '../Navbar'
import Footer from '../Footer'

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default PageLayout
