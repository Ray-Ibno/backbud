import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import StorePage from './pages/StorePage'
import BlogPage from './pages/Blogpage'
import Cartpage from './pages/Cartpage'
import ItemsContextProvider from './context/cart/ItemsContext'
import EstimatedTotalContextProvider from './context/cart/estimatedTotal'
import BlogsContextProvider from './context/api/blogsContext'
import PageLayout from './components/layout/PageLayout'

function App() {
  return (
    <>
      <ItemsContextProvider>
        <EstimatedTotalContextProvider>
          <BlogsContextProvider>
            <BrowserRouter>
              <PageLayout>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/shop" element={<StorePage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/cart" element={<Cartpage />} />
                </Routes>
              </PageLayout>
            </BrowserRouter>
          </BlogsContextProvider>
        </EstimatedTotalContextProvider>
      </ItemsContextProvider>
    </>
  )
}

export default App
