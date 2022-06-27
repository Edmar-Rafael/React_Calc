import React, { MouseEvent, ReactNode } from 'react'
import { ButtonContainer, Text } from './styles'

type ButtonType = {
  children?: ReactNode;
  text?: string | number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
};


function Button({children, text, onClick}: ButtonType) {

  return (
    <ButtonContainer onClick={onClick && onClick} type='button'>
      {children}
      <Text>{text}</Text>
    </ButtonContainer>
  )
}

export default Button