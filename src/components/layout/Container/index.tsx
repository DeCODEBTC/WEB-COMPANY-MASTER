import React from 'react'

// import { BoxContainer } from './styles';

interface IBoxContainerProps {
  children: React.ReactElement | React.ReactElement[]
}

const BoxContainer: React.FC<IBoxContainerProps> = ({ children }) => {
  return (
    <div
      className="card my-2 p-1"
      style={{
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      {children}
    </div>
  )
}

export default BoxContainer
