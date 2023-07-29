import React from 'react'

export default function Layout(props) {
  const {children} = props;
  return (
    <div className='min-h-screen bg-slate-900 text-white flex flex-col gap-14 md:gap-16 p-4'>
      <header className='flex flex-col gap-4 items-center justify-center 
        max-w-[800px] pt-14 sm:pt-16 mx-auto '>
          <h1 className='text-4xl sm:text-5xl md:text-6xl text-center font-semibold'>
            Compund Interest calculator 
          </h1>
          
      </header>
      
      <main className='flex-1 flex flex-col gap-6 md:gap-10 w-full max-w-[600px] mx-auto'>
        {children}

       </main>

      <footer className='flex items-center flex-wrap justify-center bg-slate-800 border-slate-30 py-4'>
          Developed by 
          <span className='text-slate-400'> @Ajay</span>
      </footer>

    </div>
  )
}
