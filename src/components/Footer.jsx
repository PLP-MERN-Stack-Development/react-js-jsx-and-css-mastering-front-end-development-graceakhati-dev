import { Link } from 'react-router-dom'

const Footer = ({ className = '', copyrightText = '© 2024 TaskFlow. All rights reserved.' }) => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={`bg-gray-800 dark:bg-gray-900 text-white transition-all duration-300 ease-in-out ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 transition-colors duration-200">TaskFlow</h3>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 leading-relaxed transition-colors duration-200">
              Plan smart. Work better. Stay in flow.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 transition-colors duration-200">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/task-manager"
                  className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Task Manager
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact/Info Section */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 transition-colors duration-200">Connect</h3>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mb-2 leading-relaxed transition-colors duration-200">
              Stay updated with our latest news and updates.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6 transition-colors duration-200">
          <p className="text-center text-xs sm:text-sm text-gray-400 dark:text-gray-500 transition-colors duration-200">
            {copyrightText.replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

