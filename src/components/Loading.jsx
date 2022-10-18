import React from 'react'

function Loading() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <div className="bg-slate-100 animate-pulse w-full h-72 rounded-3xl"></div>

        <div className="py-6 px-4">
          <div className="bg-slate-100 animate-pulse w-9/12 h-6 mb-6"></div>

          <div className="bg-slate-100 animate-pulse w-full h-6 mb-2"></div>

          <div className="bg-slate-100 animate-pulse w-1/3 h-4 mb-3"></div>
        </div>              
      </div>

      <div className="hidden sm:block">
        <div className="bg-slate-100 animate-pulse w-full h-72 rounded-3xl"></div>

        <div className="py-6 px-4">
          <div className="bg-slate-100 animate-pulse w-9/12 h-6 mb-6"></div>

          <div className="bg-slate-100 animate-pulse w-full h-6 mb-2"></div>

          <div className="bg-slate-100 animate-pulse w-1/3 h-4 mb-3"></div>
        </div>               
      </div>

      <div className="hidden md:block">
        <div className="bg-slate-100 animate-pulse w-full h-72 rounded-3xl"></div>

        <div className="py-6 px-4">
          <div className="bg-slate-100 animate-pulse w-9/12 h-6 mb-6"></div>

          <div className="bg-slate-100 animate-pulse w-full h-6 mb-2"></div>

          <div className="bg-slate-100 animate-pulse w-1/3 h-4 mb-3"></div>
        </div>               
      </div>

      <div className="hidden lg:block">
        <div className="bg-slate-100 animate-pulse w-full h-72 rounded-3xl"></div>

        <div className="py-6 px-4">
          <div className="bg-slate-100 animate-pulse w-9/12 h-6 mb-6"></div>

          <div className="bg-slate-100 animate-pulse w-full h-6 mb-2"></div>

          <div className="bg-slate-100 animate-pulse w-1/3 h-4 mb-3"></div>
        </div>              
      </div>
    </div>
  )
}

export default Loading