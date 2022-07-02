import React, { MouseEvent } from 'react'
import { keyType } from '../../pages/Display';
import { ButtonContainer, Text } from './styles'

type ButtonType = {
  item: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
};


function Button({item, onClick}: ButtonType) {

  return (
    <ButtonContainer onClick={onClick && onClick} type='button'>
      <Text>{item}</Text>
    </ButtonContainer>
  )
}

export default Button