const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <section className="px-4 sm:px-6 py-8 sm:py-10 max-w-4xl mx-auto text-gray-800 dark:text-gray-200 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400 transition-colors duration-200">
          About TaskFlow
        </h1>

        <p className="text-base sm:text-lg mb-8 leading-relaxed text-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
          <strong className="text-gray-900 dark:text-gray-100">TaskFlow</strong> is a modern productivity web app designed to help you plan smart, work better, and stay in flow.{' '}
          Whether you're managing personal projects or daily to-dos, TaskFlow gives you an easy way to organize your work, track your progress,{' '}
          and stay focused — all in one beautifully responsive interface.
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-10 mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          ⚙️ Technologies Used
        </h2>
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          <li>
            ⚛️ <strong className="text-gray-900 dark:text-gray-100">React 18</strong> — Building dynamic, component-based UIs
          </li>
          <li>
            ⚡ <strong className="text-gray-900 dark:text-gray-100">Vite</strong> — Lightning-fast build tool for modern web apps
          </li>
          <li>
            🎨 <strong className="text-gray-900 dark:text-gray-100">Tailwind CSS</strong> — Utility-first framework for responsive styling
          </li>
          <li>
            🔗 <strong className="text-gray-900 dark:text-gray-100">React Router</strong> — Smooth navigation between pages
          </li>
          <li>
            🌐 <strong className="text-gray-900 dark:text-gray-100">Axios</strong> — Fetching and managing data from public APIs
          </li>
          <li>
            💾 <strong className="text-gray-900 dark:text-gray-100">Context API & LocalStorage</strong> — Theme and task persistence
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-10 mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          ✨ Key Features
        </h2>
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          <li>✅ Add, complete, and delete tasks seamlessly</li>
          <li>🔍 Filter and search tasks to stay organized</li>
          <li>🌓 Light/Dark mode support for better focus</li>
          <li>📄 View sample posts fetched from a public API</li>
          <li>💫 Clean, mobile-first design that adapts to any screen</li>
        </ul>

        <p className="mt-8 sm:mt-10 text-base sm:text-lg italic text-center text-gray-600 dark:text-gray-400 transition-colors duration-200 leading-relaxed">
          TaskFlow makes productivity feel effortless — plan smart, work better, and stay in flow.
        </p>
      </section>
    </div>
  )
}

export default AboutPage

