import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Button from '../components/Button'

const POSTS_PER_PAGE = 12

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setFilteredPosts(response.data)
      } catch (err) {
        setError(err.message || 'Failed to fetch posts')
        console.error('Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Filter posts by search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPosts(posts)
      setCurrentPage(1)
    } else {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredPosts(filtered)
      setCurrentPage(1)
    }
  }, [searchQuery, posts])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-red-800 dark:text-red-400 mb-2">
            Error Loading Posts
          </h2>
          <p className="text-red-600 dark:text-red-500 mb-4">{error}</p>
          <Button
            text="Retry"
            onClick={() => window.location.reload()}
            variant="primary"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Posts
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse through {posts.length} posts from JSONPlaceholder
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by title..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </p>
          )}
        </div>
      </div>

      {/* Posts Grid */}
      {currentPosts.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No posts found matching your search.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentPosts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                description={post.body}
                footer={
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Post #{post.id}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      User {post.userId}
                    </span>
                  </div>
                }
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  text="Previous"
                  onClick={() => handlePageChange(currentPage - 1)}
                  variant="secondary"
                  disabled={currentPage === 1}
                  className="text-sm"
                />
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Button
                        key={page}
                        text={page.toString()}
                        onClick={() => handlePageChange(page)}
                        variant={currentPage === page ? 'primary' : 'secondary'}
                        className="text-sm min-w-[40px]"
                      />
                    )
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 text-gray-500 dark:text-gray-400">
                        ...
                      </span>
                    )
                  }
                  return null
                })}
                
                <Button
                  text="Next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  variant="secondary"
                  disabled={currentPage === totalPages}
                  className="text-sm"
                />
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages} ({filteredPosts.length} total posts)
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Posts

