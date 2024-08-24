import React, { useState, useEffect } from 'react'

export const BlogsContext = React.createContext()

const BlogsContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(null)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const url =
    'https://seeking-alpha.p.rapidapi.com/news/v2/list?size=20&category=market-news%3A%3Aall&number=1'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '16992a42a6mshc82d707353b97bbp11fb46jsneab7867376b1',
      'x-rapidapi-host': 'seeking-alpha.p.rapidapi.com',
    },
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url, options)
        const result = await response.json()
        if (response.ok) {
          setIsError(false)
          setBlogs(result.data)
        }
      } catch (error) {
        setIsError(true)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <BlogsContext.Provider
      value={{
        blogsContext: [blogs, setBlogs],
        isLoadingContext: [isLoading, setIsLoading],
        isErrorContext: [isError, setIsError],
      }}
    >
      {children}
    </BlogsContext.Provider>
  )
}

export default BlogsContextProvider
