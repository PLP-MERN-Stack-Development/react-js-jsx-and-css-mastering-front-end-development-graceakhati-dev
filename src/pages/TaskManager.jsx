import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/Button'

const TaskManagerPage = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault()
    if (newTask.trim() === '') return

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }

    setTasks([...tasks, task])
    setNewTask('')
  }

  // Toggle task completion
  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all'
  })

  // Get task counts
  const activeTasksCount = tasks.filter(task => !task.completed).length
  const completedTasksCount = tasks.filter(task => task.completed).length
  const totalTasksCount = tasks.length

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 transition-colors duration-200">Task Manager</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">Organize and manage your tasks efficiently</p>
      </div>

      {/* Add Task Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
        <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
          />
          <Button
            type="submit"
            text="Add Task"
            variant="primary"
            className="w-full sm:w-auto"
          />
        </form>
      </div>

      {/* Filter Buttons */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button
            text={`All (${totalTasksCount})`}
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'primary' : 'secondary'}
            className="text-sm"
          />
          <Button
            text={`Active (${activeTasksCount})`}
            onClick={() => setFilter('active')}
            variant={filter === 'active' ? 'primary' : 'secondary'}
            className="text-sm"
          />
          <Button
            text={`Completed (${completedTasksCount})`}
            onClick={() => setFilter('completed')}
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            className="text-sm"
          />
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-8 text-center transition-colors duration-200">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {filter === 'all' && 'No tasks yet. Add your first task above!'}
              {filter === 'active' && 'No active tasks. Great job!'}
              {filter === 'completed' && 'No completed tasks yet.'}
            </p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl hover:-translate-y-0.5 ${
                task.completed ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                  className="mt-1 w-5 h-5 text-blue-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded focus:ring-blue-500 dark:focus:ring-blue-400 cursor-pointer"
                />
                
                {/* Task Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-base sm:text-lg ${
                      task.completed
                        ? 'line-through text-gray-500 dark:text-gray-500'
                        : 'text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    {task.text}
                  </p>
                  {task.createdAt && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      Created: {new Date(task.createdAt).toLocaleDateString()}
                    </p>
                  )}
                </div>

                {/* Delete Button */}
                <Button
                  text="Delete"
                  onClick={() => handleDeleteTask(task.id)}
                  variant="danger"
                  className="text-sm whitespace-nowrap"
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Stats */}
      {totalTasksCount > 0 && (
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg shadow-md dark:shadow-lg p-6 text-white transition-colors duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{totalTasksCount}</p>
              <p className="text-sm opacity-90">Total Tasks</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{activeTasksCount}</p>
              <p className="text-sm opacity-90">Active Tasks</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{completedTasksCount}</p>
              <p className="text-sm opacity-90">Completed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskManagerPage
