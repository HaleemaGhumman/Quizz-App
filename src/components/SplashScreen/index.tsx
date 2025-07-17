import { useEffect, useState } from 'react'
import { AppLogo } from '../../config/icons'
import PageCenter from '../ui/PageCenter'
const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState(0.25)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoSize(0.75)
      } else {
        setLogoSize(1)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <PageCenter justifyCenter>
      <div className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md mx-4 transition-all duration-300">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <AppLogo
              className="transition-all duration-1000 w-[70px] md:w-[80px]"
              style={{ scale: logoSize }}
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                IQode by Haleema
              </h1>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                Master web technologies through interactive quizzes
              </p>
            </div>
          </div>
          <div className="w-full pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-500 dark:text-gray-400">
              Loading your quiz experience...
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    </PageCenter>
  )
}
export default SplashScreen