import React from 'react'

const Card = ({bg,children}) => {
  return (
    <div className={`${bg} shadow-lg rounded px-6 py-6 max-w-4xl mx-auto`}>{children}
      
    </div>
  )
}

export default Card
