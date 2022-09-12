import React from 'react'

// import { Container } from './styles';

// select https://fonts.google.com/icons?selected=Material+Icons icon
interface IIconProps {
  icon: string
}

const Icon: React.FC<IIconProps> = ({ icon }) => {
  return <span className="material-icons">{icon}</span>
}

export default Icon
