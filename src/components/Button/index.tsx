import React from 'react'
import { ButtonContainer } from './styles';
import { IButton } from "./types";

const Button: React.FC<IButton> = ({title,variant = "primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

export { Button }
