import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogsContext } from '../context/api/blogsContext'
import { v7 as uuV7 } from 'uuid'

const BlogPage = () => {
  const { blogsContext, isErrorContext, isLoadingContext } =
    useContext(BlogsContext)
  const [isError, setIsError] = isErrorContext
  const [isLoading, setIsLoading] = isLoadingContext
  const [blogs, setBlogs] = blogsContext

  if (isLoading) {
    return (
      <>
        <button
          type="button"
          className="bg-indigo-500 flex p-4 rounded-md mx-auto mt-10"
          disabled
        >
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <svg
              version={'1.1'}
              id={'L3'}
              xmlns={'http://www.w3.org/2000/svg'}
              xmlnsXlink={'http://www.w3.org/1999/xlink'}
              x={'0px'}
              y={'0px'}
              viewBox={'0 0 100 100'}
              enableBackground={'new 0 0 0 0'}
              xmlSpace={'preserve'}
            >
              <circle
                fill="none"
                stroke="#fff"
                strokeWidth={'4'}
                cx={'50'}
                cy={'50'}
                r={'44'}
                style={{ opacity: '0.5' }}
              />
              <circle
                fill={'#fff'}
                stroke={'#e74c3c'}
                strokeWidth={3}
                cx={'8'}
                cy={'54'}
                r={'6'}
              >
                <animateTransform
                  attributeName="transform"
                  dur="2s"
                  type="rotate"
                  from="0 50 48"
                  to="360 50 52"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </svg>
          Processing...
        </button>
      </>
    )
  }

  if (isError) {
    return <h1>Something went wrong...</h1>
  }

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-20 pt-10">
      {blogs &&
        blogs.map((blog) => (
          <Link key={uuV7()} to={'/'}>
            <div
              style={{ backgroundImage: `url(${blog.links.uriImage})` }}
              className="h-96 flex justify-end bg-cover rounded-md"
            >
              <div className="h-auto flex flex-col justify-end bg-gradient-to-t from-white p-5">
                <h1 className="text-lg font-bold">
                  Title:{' '}
                  <span className="font-light">{blog.attributes.title}</span>
                </h1>
                <h1 className="text-lg font-bold">
                  Published On:{' '}
                  <span className="font-light">
                    {blog.attributes.publishOn}
                  </span>
                </h1>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default BlogPage
