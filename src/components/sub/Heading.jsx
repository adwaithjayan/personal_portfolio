import React from 'react'

const Heading = ({title}) => {
  return (
    <h1 className='text-3xl dark:text-white transition-colors sm:text-2xl font-bold text-gray-600 mb-14 self-start'>{title}</h1>
  )
}

export default Heading