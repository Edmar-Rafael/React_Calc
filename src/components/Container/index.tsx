import React, { ReactNode } from 'react'
import { BigBox } from './styles'

type ContainerType = {
  children: ReactNode
}


function Container({children}: ContainerType) {

  return (
    <BigBox>
      {children}
    </BigBox>
  )
}

export default Container