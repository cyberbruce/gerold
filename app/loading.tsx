import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      <div className="relative flex items-center justify-center w-32 h-32">
        {/* The static, lighter-colored ring */}
        <div className="absolute w-full h-full border-4 border-yellow-200 rounded-full opacity-50"></div>
        {/* The spinning, darker-colored arc */}
        <div className="absolute w-full h-full border-4 border-t-yellow-500 border-transparent rounded-full animate-spin"></div>
        {/* The central icon with a subtle pulse */}
        <div className="flex items-center justify-center w-24 h-24 bg-white/80 rounded-full shadow-inner">
            <span className="text-5xl animate-pulse">🐷</span>
        </div>
      </div>
      <p className="mt-8 text-xl font-medium tracking-wider text-yellow-800/80">
        Just a moment...
      </p>
    </div>
  )
}

export default Loading