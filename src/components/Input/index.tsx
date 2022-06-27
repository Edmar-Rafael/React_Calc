import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}


function Input({...props}: InputProps) {

  return (
    <InputContainer {...props}/>
  )
}

export default Input