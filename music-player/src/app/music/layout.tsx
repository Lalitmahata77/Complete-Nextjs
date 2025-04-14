import React, { ReactNode } from 'react'

const layout = ({children,sidebar}:{children:ReactNode, sidebar:ReactNode}) => {
  return (
    <div>
        <div className='flex'>
            <div className='w-1/4'>
            {sidebar}
            
            </div>
            <div className='w-3/4'>
            {children}
            </div>
        </div>
    </div>
  )
}

export default layout