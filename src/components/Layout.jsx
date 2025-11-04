import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, navbarProps = {}, footerProps = {} }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
      <Navbar {...navbarProps} />
      <main className="flex-grow w-full">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer {...footerProps} />
    </div>
  )
}

export default Layout

