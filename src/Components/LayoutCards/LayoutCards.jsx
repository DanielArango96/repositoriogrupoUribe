import React from 'react'

const LayoutCards = ({children}) => {
  return (
    <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {children}
        </div>      
    </div>
  )
}

export default LayoutCards
