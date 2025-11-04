const Card = ({ 
  title, 
  description, 
  image, 
  footer,
  imageAlt = '',
  className = '',
  children,
  onClick 
}) => {
  const cardClasses = [
    'bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg overflow-hidden',
    'transition-all duration-300 ease-in-out',
    onClick ? 'cursor-pointer hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2' : '',
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      } : undefined}
    >
      {image && (
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt || title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-4 sm:p-6 lg:p-8">
        {title && (
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 transition-colors duration-200">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed transition-colors duration-200">
            {description}
          </p>
        )}
        
        {children && (
          <div className="text-gray-700 dark:text-gray-300">
            {children}
          </div>
        )}
        
        {footer && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card

