const Button = ({ 
  text, 
  children,
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95'
  
  const variantStyles = {
    primary: 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-600/50 focus:ring-blue-500 dark:focus:ring-blue-400 hover:-translate-y-0.5',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-md focus:ring-gray-500 dark:focus:ring-gray-400 hover:-translate-y-0.5',
    danger: 'bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50 dark:hover:shadow-red-600/50 focus:ring-red-500 dark:focus:ring-red-400 hover:-translate-y-0.5'
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim()
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      {...props}
    >
      {text || children}
    </button>
  )
}

export default Button

