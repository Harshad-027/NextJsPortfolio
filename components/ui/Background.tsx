import React from 'react'
import Blob from './Blob'

const Background = () => {
  return (
    <div className='fixed inset-0 -z-10 pointer-events-none'>
      <Blob />
    </div>
  )
}

export default Background